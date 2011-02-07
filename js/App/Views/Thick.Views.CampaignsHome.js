var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.CampaignsHome = function() {
	this.container = "#campaignsMain";
}

$.extend(Thick.Views.CampaignsHome.prototype, new Thick.Views.Base());

Thick.Views.CampaignsHome.prototype.render = function() {
		
	this.getTemplate("js/App/Templates/CampaignsHome.jqt", "#tmplCampaignsHome", function(tmpl) {
    $(this.container).html(tmpl.html())
		console.log("Views: Dashboard: render");
		$.publish("dashboardRendered");
  });  	
		
	console.log("Views: CampaignsHome: render");
}
Thick.Views.CampaignsHome.prototype.teardown = function() {
	console.log("Views: CampaignsHome: teardown");
}