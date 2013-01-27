var schedule = new FED2.ScheduleView();
var error404 = new FED2.errorView();


// create an object
var Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"game/:id": "game",
                "ranking": "ranking",
                '*path': 'defaultAction'
	},
	// the `home` action renders the schedule
	home: schedule.render,
	game: function(id) {
		// console.log('load the game page');
		var game = new FED2.GameView({id: id});
		// console.log(id);
	},
        
        ranking: function() {	
		var ranking = new FED2.PoolView();
	},
        
        defaultAction: error404.render
        
});
// create an instance of the object
var router = new Router();
Backbone.history.start();