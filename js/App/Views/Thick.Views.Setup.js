var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Setup = function() {
	
}
Thick.Views.Setup.prototype.render = function() {
	console.log("Views: Setup: render");
}
Thick.Views.Setup.prototype.teardown = function() {
	console.log("Views: Setup: teardown");
}