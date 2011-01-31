var Thick = Thick || {};
Thick.PageController = function() {
	this.partialViews = {	
		"loggedOut": {
			id:"loggedOut",
			view: new Thick.Views.LoggedOut(),
			active: false,
			partialViewId: null,
			childViews: []
		},
		"loggedIn": {
			id:"loggedIn",
			view: new Thick.Views.LoggedIn(),
			active: false,
			partialViewId: null,
			childViews: []
		},
		"dashboard": {
			id:"dashboard",
			view: new Thick.Views.Dashboard(),
			active: false,
			partialViewId: "loggedIn",
			childViews: []
		},
		"setup": {
			id: "setup",
			view: new Thick.Views.Setup(),
			active: false,
			partialViewId: "loggedIn",
			childViews: []
		},
		"campaigns": {
			id: "campaigns",
			view: new Thick.Views.Campaigns(),
			active: false,
			partialViewId: "setup",
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
  console.log("PAGECONTROLLER > RENDER", this.partialViews)
  
  // if the partialView is already setup we only have to teardown children partial views etc
  // we also assume here that parent partial views are still showing
  if(this.partialViews[options.partialViewId].active) {
    this.teardownChildPartialViews(options.partialViewId);
  	this.renderView(options.partialViewId, options.view);
  }
  // if the partialView is not already setup
    // tear down all the children partial views
    // tear down non attached parents
    // we then have to render all parents partial views (in order)
    // then render the view itself
  else {    
    console.log("1. teardown non attached parents");
    this.teardownNonAttachedPartialViews(options.partialViewId);
    console.log("2. teardown children");
    this.teardownChildPartialViews(options.partialViewId); // children
    console.log("3. render parents");
    this.renderParentPartialViews(options.partialViewId);
    console.log("4. render the view");
    this.renderView(options.partialViewId, options.view);
  }
}

Thick.PageController.prototype.teardownNonAttachedPartialViews = function(partialViewId) {
  this.getActiveNonAttachedParents(partialViewId);
  this.activeChildren.reverse();
  this.teardownChildren();
}

Thick.PageController.prototype.renderParentPartialViews = function(partialViewId) {
  var inActiveParents = this.getInActiveParentViews(partialViewId).reverse();
  for(var i = 0; i < inActiveParents.length; i++) {
		inActiveParents[i].view.render();
		inActiveParents[i].active = true;
	}
}

Thick.PageController.prototype.teardownChildPartialViews = function(partialViewId) {
  this.getActiveChildrenViews(partialViewId);
	this.teardownChildren();
}

Thick.PageController.prototype.teardownChildren = function() {
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
	this.activeChildren = [];
}


Thick.PageController.prototype.renderView = function(partialViewId, view) {
  this.partialViews[partialViewId].childViews.push(view);
  view.render();
}


Thick.PageController.prototype.getActiveChildrenViews = function(partialViewId) {
	var viewId = null;
	for(var view in this.partialViews) {
		if(this.partialViews[view].active) {
			if(partialViewId == this.partialViews[view].partialViewId) {
				viewId = view;
				this.activeChildren.push(this.partialViews[view]);
				break;
			}
		}
	}
	if(viewId) {
		this.getActiveChildrenViews(viewId);
	}
}


Thick.PageController.prototype.getActiveNonAttachedParents = function(partialViewId) {
	if(this.partialViews[partialViewId] && this.partialViews[partialViewId].active == false) {
		this.getActiveNonAttachedParents(this.partialViews[partialViewId].partialViewId);
	}
	else {
		this.getActiveChildrenViews(partialViewId);
	}
}

Thick.PageController.prototype.getInActiveParentViews = function(partialViewId) {
	var inActiveViews = [];
	while(this.partialViews[partialViewId] && this.partialViews[partialViewId].active == false ) {
		inActiveViews.push(this.partialViews[partialViewId]);
		partialViewId = this.partialViews[partialViewId].partialViewId;
	}
	return inActiveViews;
}
