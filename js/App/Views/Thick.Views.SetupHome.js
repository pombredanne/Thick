var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.SetupHome = function() {
	this.id = "SetupHomeView";
	this.container = "#setupMain";
}

$.extend(Thick.Views.SetupHome.prototype, new Thick.Views.Base())

Thick.Views.SetupHome.prototype.render = function() {
  var dfd = $.Deferred();
  dfd.done(function() {
    console.log(arguments);
  });

  
  this.getTemplate("js/App/Templates/SetupHome.jqt", "#tmplSetupHome", dfd.resolve);  
  return dfd.promise();		
}

Thick.Views.SetupHome.prototype.teardown = function() {
	console.log("Views: SetupHome: teardown");
}