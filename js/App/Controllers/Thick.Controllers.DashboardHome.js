var Thick = Thick || {};
Thick.Controllers = Thick.Controllers || {};
Thick.Controllers.DashboardHome = function() {
	this.view = new Thick.Views.DashboardHome();
	Thick.App.tyro.addRoute("/dashboard/", $.proxy(this.renderDashboard, this));
}
Thick.Controllers.DashboardHome.prototype.renderDashboard = function() {
	Thick.App.pageController.render({ partialViewId: "dashboard", view: this.view });
}