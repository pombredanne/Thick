var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.LoggedOut = function() {
	this.container = "#app";
}

$.extend(Thick.Views.LoggedOut.prototype, new Thick.Views.Base());

Thick.Views.LoggedOut.prototype.render = function() {	
	this.getTemplate("js/App/Templates/tmplPartialLoggedOut.jqt", "#tmplPartialLoggedOut", function(tmpl) {
    $(this.container).html(tmpl.html());
		console.log("Views: LoggedOut: render");
  });
}
Thick.Views.LoggedOut.prototype.teardown = function() {
	console.log("Views: LoggedOut: teardown");
}