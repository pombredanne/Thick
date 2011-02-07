var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Setup = function() {
	this.container = "#main";
}

$.extend(Thick.Views.Setup.prototype, new Thick.Views.Base());

Thick.Views.Setup.prototype.render = function() {
  this.getTemplate("js/App/Templates/PartialSetup.jqt", "#tmplPartialSetup", function(tmpl) {
    $(this.container).html(tmpl.html())
		console.log("Views: Setup: render");
		$.publish("setupRendered");
  });  
}
Thick.Views.Setup.prototype.teardown = function() {
  $(this.container).empty();
	console.log("Views: Setup: teardown");
}