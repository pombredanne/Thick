var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Dashboard = function() {
	this.container = "#main";
}

$.extend(Thick.Views.Dashboard.prototype, new Thick.Views.Base());

Thick.Views.Dashboard.prototype.render = function() {
	this.getTemplate("js/App/Templates/PartialDashboard.jqt", "#tmplPartialDashboard", function(tmpl) {
    $(this.container).html(tmpl.html())
		console.log("Views: Dashboard: render");
		$.publish("dashboardRendered");
  });  
}
Thick.Views.Dashboard.prototype.teardown = function() {
	$(this.container).empty();
	console.log("Views: Dashboard: teardown");
}