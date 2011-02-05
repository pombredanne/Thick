var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Dashboard = function() {
	this.container = "#main";
}
Thick.Views.Dashboard.prototype.render = function() {
	console.log("Views: Dashboard: render");
}
Thick.Views.Dashboard.prototype.teardown = function() {
	console.log("Views: Dashboard: teardown");
}