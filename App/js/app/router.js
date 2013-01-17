var router = function (rankingModel, PoolView) {
		var AppRouter = Backbone.Router.extend({
			rankingView:"",

			// Define routes to pages (hash urls #/page_name)
			routes: {
				'ranking'	: 'showRanking'
			},
			showRanking: function (actions) {
                                var rankingModel = new TeamModel();
				this.rankingView = new PoolView({model: rankingModel});
				this.rankingView.render();
			}
//			defaultAction: function (actions) {
//				homeView.render();
//			}
		});

		var initialize = function () {
			var app_router = new AppRouter();
			Backbone.history.start();
		};

		return {
			initialize: initialize
		};
	};
