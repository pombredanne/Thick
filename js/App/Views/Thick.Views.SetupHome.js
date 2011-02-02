var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.SetupHome = function() {
	this.id = "SetupHomeView";
	this.container = "#setupMain";
}

$.extend(Thick.Views.SetupHome.prototype, new Thick.Views.Base())

Thick.Views.SetupHome.prototype.render = function() {
  this.getTemplate("js/App/Templates/SetupHome.jqt", "#tmplSetupHome", function(tmpl) {
    $(this.container).html(tmpl.html())
  });
  
}

Thick.Views.SetupHome.prototype.teardown = function() {
	$(this.container).empty();
}