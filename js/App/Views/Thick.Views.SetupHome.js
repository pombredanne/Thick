var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.SetupHome = function() {
	this.id = "SetupHomeView";
}
Thick.Views.SetupHome.prototype.render = function() {
	console.log("Views: SetupHome: render");
}
Thick.Views.SetupHome.prototype.teardown = function() {
	console.log("Views: SetupHome: teardown");
}