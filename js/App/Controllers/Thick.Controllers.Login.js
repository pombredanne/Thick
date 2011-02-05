var Thick = Thick || {};
Thick.Controllers = Thick.Controllers || {};
Thick.Controllers.Login = function() {
	this.view = new Thick.Views.Login();
	Thick.App.tyro.addRoute("/login/", $.proxy(this.renderDashboard, this));
}
Thick.Controllers.Login.prototype.renderDashboard = function() {
	Thick.App.pageController.render("loggedOut");
	Thick.App.pageController.addChildView("loggedOut", this.view);
	this.view.render();
}