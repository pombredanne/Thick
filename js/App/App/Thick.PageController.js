var Thick = Thick || {};
Thick.PageController = function() {
	this.views = {
	
		"loggedOut": {
			id:"loggedOut",
			view: new Thick.Views.LoggedOut(),
			active: false,
			parentViewId: null,
			childViews: []
		},
		"loggedIn": {
			id:"loggedIn",
			view: new Thick.Views.LoggedIn(),
			active: false,
			parentViewId: null,
			childViews: []
		},
		"dashboard": {
			id:"dashboard",
			view: new Thick.Views.Dashboard(),
			active: false,
			parentViewId: "loggedIn",
			childViews: []
		},
		"setup": {
			id: "setup",
			view: new Thick.Views.Setup(),
			active: false,
			parentViewId: "loggedIn",
			childViews: []
		},
		"campaigns": {
			id: "campaigns",
			view: new Thick.Views.Campaigns(),
			active: false,
			parentViewId: "setup",
			childViews: []
		}
	}
	
	this.activeChildren = [];
	this.activeNonAttachedParents = [];
	
}

function uniqueArr(a) {
 temp = new Array();
 for(i=0;i<a.length;i++){
  if(!contains(temp, a[i])){
   temp.length+=1;
   temp[temp.length-1]=a[i];
  }
 }
 return temp;
}

function contains(a, e) {
 for(j=0;j<a.length;j++)if(a[j]==e)return true;
 return false;
}

Thick.PageController.prototype.render = function(options) {

  
  
	this.getActiveNonAttachedParents(this.views[options.parentViewId].parentViewId);
	this.getActiveChildrenViews(this.views[options.parentViewId].parentViewId);
	this.activeChildren = this.activeChildren.reverse();
	this.activeChildren = uniqueArr(this.activeChildren); // hack because i cant check logic with my brain
	
	if(this.views[options.parentViewId].active) {
		for(var z = 0; z < this.activeChildren.length; z++) {
			if(this.activeChildren[z] === this.views[options.parentViewId]) {
				this.activeChildren.splice(z, 1);
				break;
			}
		}    
	}
	
	// tear down the views
	for(var j = 0; j < this.activeChildren.length; j++) {
		var child = this.activeChildren[j];
		for(var k = 0; k < child.childViews.length; k++) {
			child.childViews[k].teardown();
			
			// we need to remove this
			child.childViews.splice(k, 1);
			k--;
		}
		child.view.teardown();
		child.active = false;
	}
	
	// reset after teardown
	this.activeChildren = [];
	
	// ensure that we teardown any view that the new view might need
	this.teardownSpecificChildView(options.parentViewId);

	// render all the parent views before rendering the view
	var inActiveParents = this.getInActiveParentViews(options.parentViewId).reverse();
	
	for(var i = 0; i < inActiveParents.length; i++) {
		inActiveParents[i].view.render();
		inActiveParents[i].active = true;
	}
	
	// final easy bit
	this.addDumbViewToParentViewChildViews(options.parentViewId, options.view);
	this.renderDumbView(options.view);
}

Thick.PageController.prototype.teardownSpecificChildView = function(parentViewId) {
	var parentParent = this.getParentParentView(parentViewId);
	if(!parentParent) return;
	for(var i = 0; i < parentParent.childViews.length; i++) {
		if(parentParent.childViews[i].container === this.views[parentViewId].view.container) {
			parentParent.childViews[i].teardown();
			parentParent.childViews.splice(i, 1); // remove from array
			break; // should only be one
		}
	}
}

Thick.PageController.prototype.addDumbViewToParentViewChildViews = function(parentViewId, view) {
	this.views[parentViewId].childViews.push(view);
}

Thick.PageController.prototype.renderDumbView = function(view) {
	view.render();
}

Thick.PageController.prototype.getActiveChildrenViews = function(parentViewId) {
	var viewId = null;
	for(var view in this.views) {
		if(this.views[view].active) {
			if(parentViewId == this.views[view].parentViewId) {
				viewId = view;
				this.activeChildren.push(this.views[view]);
				break;
			}
		}
	}
	if(viewId) {
		this.getActiveChildrenViews(viewId);
	}
}

Thick.PageController.prototype.getActiveNonAttachedParents = function(parentViewId) {
	if(this.views[parentViewId] && this.views[parentViewId].active == false) {
		this.getActiveNonAttachedParents(this.views[parentViewId].parentViewId);
	}
	else {
		this.getActiveChildrenViews(parentViewId);
	}
}

Thick.PageController.prototype.getInActiveParentViews = function(parentViewId) {
	var inActiveViews = [];
	while(this.views[parentViewId] && this.views[parentViewId].active == false ) {
		inActiveViews.push(this.views[parentViewId]);
		parentViewId = this.views[parentViewId].parentViewId;
	}
	return inActiveViews;
}

Thick.PageController.prototype.getParentParentView = function(parentViewId) {
	return this.views[this.views[parentViewId].parentViewId];
}