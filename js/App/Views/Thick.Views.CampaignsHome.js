var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.CampaignsHome = function() {
	this.id = "CampaignsHomeView";
}
Thick.Views.CampaignsHome.prototype.render = function() {
	console.log("Views: CampaignsHome: render");
}
Thick.Views.CampaignsHome.prototype.teardown = function() {
	console.log("Views: CampaignsHome: teardown");
}