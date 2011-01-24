var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.LoggedOut = function() {
	
}
Thick.Views.LoggedOut.prototype.render = function() {
	console.log("Views: LoggedOut: render");
}
Thick.Views.LoggedOut.prototype.teardown = function() {
	console.log("Views: LoggedOut: teardown");
}