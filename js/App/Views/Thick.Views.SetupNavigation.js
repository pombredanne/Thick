var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.SetupNavigation = function() {
	this.container = "#partialSetup nav";	
}

$.extend(Thick.Views.SetupNavigation.prototype, new Thick.Views.Base());


Thick.Views.SetupNavigation.prototype.render = function() {
	this.getTemplate("js/App/Templates/tmplSetupNavigation.jqt", "#tmplSetupNavigation", function(tmpl) {
    $(this.container).html(tmpl.html());
		console.log("Views: SetupNavigation: render");
  });
	
}
Thick.Views.SetupNavigation.prototype.teardown = function() {
	$(this.container).empty();
	console.log("Views: SetupNavigation: teardown");
}