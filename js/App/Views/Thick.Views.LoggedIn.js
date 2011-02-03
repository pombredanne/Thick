var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.LoggedIn = function() {
	this.container = "#app";
	this.dfd = Thick.App.dfd;
}

$.extend(Thick.Views.LoggedIn.prototype, new Thick.Views.Base());

Thick.Views.LoggedIn.prototype.render = function() {  
  this.getTemplate("js/App/Templates/PartialLoggedIn.jqt", "#tmplPartialLoggedIn", function(tmpl) {
    $(this.container).html(tmpl.html());
	console.log("Views: LoggedIn: render");
  });
}

Thick.Views.LoggedIn.prototype.teardown = function() {
	$(this.container).empty();
	console.log("Views: LoggedIn: teardown");
}