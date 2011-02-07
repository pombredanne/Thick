var Thick = Thick || {};
Thick.Controllers = Thick.Controllers || {};
Thick.Controllers.SetupNavigation = function() {
	this.view = new Thick.Views.SetupNavigation();
	$.subscribe("setupRendered", $.proxy(this.renderNav, this))
}
Thick.Controllers.SetupNavigation.prototype.renderNav = function() {
	Thick.App.pageController.addChildView("setup", this.view);
	this.view.render();	
}