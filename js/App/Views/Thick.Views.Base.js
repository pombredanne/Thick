var Thick = Thick || {};
Thick.Views = Thick.Views || {};
Thick.Views.Base = function() {};
Thick.Views.Base.prototype.getTemplate = function(path, id, fn) {
  if(!path) {
  	throw new TypeError("Views.Base#getTemplate - path not defined");
  }

  if(!id) {
  	throw new TypeError("Views.Base#getTemplate - id not defined");
  }

  if(!fn) {
  	throw new TypeError("Views.Base#getTemplate - fn not defined");
  }

  var tmpl = $(id);
    if(tmpl.length) {
    fn.call(this, tmpl);
    return;
  }

  $.get(path, $.proxy(function(resp) {
    $("body").append(resp);
    var tmpl = $(id);
    fn.call(this, tmpl);
  }, this));
}
