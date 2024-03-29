var Thick = Thick || {};
Thick.Controllers = Thick.Controllers || {};
Thick.Controllers.SetupHome = function() {
	this.view = new Thick.Views.SetupHome();
	Thick.App.tyro.addRoute("/setup/", $.proxy(this.renderDashboard, this));
}
Thick.Controllers.SetupHome.prototype.renderDashboard = function() {
	Thick.App.pageController.render("setup");
	Thick.App.pageController.addChildView("setup", this.view);
	this.view.render();
}