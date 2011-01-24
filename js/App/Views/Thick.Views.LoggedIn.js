var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.LoggedIn = function() {
	
}
Thick.Views.LoggedIn.prototype.render = function() {
	console.log("Views: LoggedIn: render");
}
Thick.Views.LoggedIn.prototype.teardown = function() {
	console.log("Views: LoggedIn: teardown");
}