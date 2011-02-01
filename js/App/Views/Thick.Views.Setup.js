var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Setup = function() {
	this.container = "#main";
}

$.extend(Thick.Views.Setup.prototype, new Thick.Views.Base());

Thick.Views.Setup.prototype.render = function() {
  var dfd = $.Deferred();
  dfd.done(function(tmpl) {
    console.log(arguments);
  }) 
    
  setTimeout(function() {
    alert(9)
    dfd.resolve("hello");
    
  }, 4000)  
    
  //this.getTemplate("js/App/Templates/PartialSetup.jqt", "#tmplPartialSetup", dfd.resolve);  
  
  return dfd.promise();
  
}
Thick.Views.Setup.prototype.teardown = function() {
  $(this.container).empty();
	console.log("Views: Setup: teardown");
}