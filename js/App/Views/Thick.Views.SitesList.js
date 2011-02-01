var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.SitesList = function() {
	this.id = "SitesListView";
	this.container = "#setupMain";
}
Thick.Views.SitesList.prototype.render = function() {
	console.log("Views: SitesList: render");
}
Thick.Views.SitesList.prototype.teardown = function() {
	console.log("Views: SitesList: teardown");
}