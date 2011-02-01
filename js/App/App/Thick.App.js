var Thick = Thick || {};
Thick.App = new (function() {
	
	var app = {};
	
	app.tyro = new Tyro();
	
	$(document).ready(function() {
		app.pageController = new Thick.PageController();
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
