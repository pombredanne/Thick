var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Campaigns = function() {
	this.container = "#setupMain";
	this.id = "Campaigns";
}
Thick.Views.Campaigns.prototype.render = function() {
	console.log("Views: Campaigns: render");
}
Thick.Views.Campaigns.prototype.teardown = function() {
	console.log("Views: Campaigns: teardown");
}