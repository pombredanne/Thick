var Thick = Thick || {};
Thick.App = new (function() {
	
	var app = {};
	
	app.tyro = new Tyro.Routes();
	
	$(document).ready(function() {
  
		app.pageController = new Tyro.PageController();
		app.tyro.addController(Thick.Controllers.Login);
		app.tyro.addController(Thick.Controllers.DashboardHome);
		app.tyro.addController(Thick.Controllers.SetupHome);
		app.tyro.addController(Thick.Controllers.SetupNavigation);
		app.tyro.addController(Thick.Controllers.CampaignsHome);
		app.tyro.addController(Thick.Controllers.Sites);
		app.tyro.run();
	});
	
	return app;	

});
