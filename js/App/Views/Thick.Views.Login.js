var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Login = function() {
	this.container = "#partialLoggedOut";
}

$.extend(Thick.Views.Login.prototype, new Thick.Views.Base());

Thick.Views.Login.prototype.render = function() {
	this.getTemplate("js/App/Templates/tmplLogin.jqt", "#tmplLogin", function(tmpl) {
    $(this.container).html(tmpl.html());
		console.log("Views: Login: render");
  });
}
Thick.Views.Login.prototype.teardown = function() {
	$(this.container).empty();
	console.log("Views: Login: teardown");
}