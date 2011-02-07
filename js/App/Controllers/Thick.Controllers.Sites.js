var Thick = Thick || {};
Thick.Controllers = Thick.Controllers || {};
Thick.Controllers.Sites = function() {
	this.view = new Thick.Views.SitesList();
  Thick.App.tyro.addRoute("/setup/sites/", $.proxy(this.renderList, this));
}
Thick.Controllers.Sites.prototype.renderList = function() {
	//Thick.App.pageController.render({ partialViewId: "setup", view: this.view });
}