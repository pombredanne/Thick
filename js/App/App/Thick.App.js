var Thick = Thick || {};
Thick.App = new (function() {
	
	var app = {};
	
	app.tyro = new Tyro.Routes();
	
	$(document).ready(function() {
  
		app.pageController = new Tyro.PageController();
		
		
		
		app.pageController.partialViews = {	
				"loggedOut": {
					id:"loggedOut",
					view: new Thick.Views.LoggedOut(),
					active: false,
					partialViewId: null,
					childViews: []
				},
				"loggedIn": {
					id:"loggedIn",
					view: new Thick.Views.LoggedIn(),
					active: false,
					partialViewId: null,
					childViews: []
				},
				"dashboard": {
					id:"dashboard",
					view: new Thick.Views.Dashboard(),
					active: false,
					partialViewId: "loggedIn",
					childViews: []
				},
				"setup": {
					id: "setup",
					view: new Thick.Views.Setup(),
					active: false,
					partialViewId: "loggedIn",
					childViews: []
				},
				"campaigns": {
					id: "campaigns",
					view: new Thick.Views.Campaigns(),
					active: false,
					partialViewId: "setup",
					childViews: []
				}
			}
		
		
		
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
