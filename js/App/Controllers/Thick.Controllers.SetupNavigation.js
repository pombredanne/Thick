var Thick = Thick || {};
Thick.Controllers = Thick.Controllers || {};
Thick.Controllers.SetupNavigation = function() {
	this.view = new Thick.Views.SetupNavigation();
	//Thick.App.tyro.addRoute("/setup/", $.proxy(this.renderNav, this));
}
Thick.Controllers.SetupNavigation.prototype.renderNav = function() {
	Thick.App.pageController.render({ parentViewId: "setup", view: this.view });
}