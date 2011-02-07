var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Campaigns = function() {
	this.container = "#setupMain";
	this.id = "Campaigns";
}

$.extend(Thick.Views.Campaigns.prototype, new Thick.Views.Base());

Thick.Views.Campaigns.prototype.render = function() {
	this.getTemplate("js/App/Templates/PartialCampaigns.jqt", "#tmplPartialCampaigns", function(tmpl) {
    $(this.container).html(tmpl.html())
		console.log("Views: Campaigns: render");
		$.publish("campaignsRendered");
  });  
	
}
Thick.Views.Campaigns.prototype.teardown = function() {
	console.log("Views: Campaigns: teardown");
}