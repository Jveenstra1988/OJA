var schedule = new FED2.ScheduleView();
// var game = new FED2.GameView();

// create an object
var Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"game/:id": "game",
		"ranking": "ranking"
	},
	// the `home` action renders the schedule
	home: schedule.render,
	game: function(id) {
		// console.log('load the game page');
		var game = new FED2.GameView({id: id});
		// console.log(id);
	},

	ranking: function() {
		console.log('load the ranking page');
		var ranking = new FED2.PoolView();
		// console.log(id);
	}
});
// create an instance of the object
var router = new Router();
Backbone.history.start();