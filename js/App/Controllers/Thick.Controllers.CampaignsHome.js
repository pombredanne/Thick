var Thick = Thick || {};
Thick.Controllers = Thick.Controllers || {};
Thick.Controllers.CampaignsHome = function() {
	this.view = new Thick.Views.CampaignsHome();
	Thick.App.tyro.addRoute("/setup/campaigns/", $.proxy(this.renderCampaigns, this));
}
Thick.Controllers.CampaignsHome.prototype.renderCampaigns = function() {
	Thick.App.pageController.render({ partialViewId: "campaigns", view: this.view });
}