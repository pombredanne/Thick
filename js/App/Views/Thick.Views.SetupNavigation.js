var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.SetupNavigation = function() {
	this.id = "SetupNavigationView";	
}
Thick.Views.SetupNavigation.prototype.render = function() {
	console.log("Views: SetupNavigation: render");
}
Thick.Views.SetupNavigation.prototype.teardown = function() {
	console.log("Views: SetupNavigation: teardown");
}