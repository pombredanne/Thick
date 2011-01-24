var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.DashboardHome = function() {
	this.id = "DashboardHomeView";
}
Thick.Views.DashboardHome.prototype.render = function() {
	console.log("Views: DashboardHome: render");
}
Thick.Views.DashboardHome.prototype.teardown = function() {
	console.log("Views: DashboardHome: teardown");
}