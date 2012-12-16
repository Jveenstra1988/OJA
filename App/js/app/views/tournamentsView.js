// define tournaments view
TournamentsView = Backbone.View.extend({
    // Define element (this.el)
	    el: $("#league"),

	    // Initialize view *(backbone method)*
	initialize: function () {
		    this.logMessage("League view initialized");

		    // Specify collection for this view
		    this.collection = new League(leagueData);

		    // Render view
	    this.render();

	},

	    // Render view *(backbone method)*
	render: function () {
	    var self = this;

	    _.each(this.collection.models, function (item) {
		self.renderTournament(item);
	    }, this);
	},

	    // Render tournament *(custom method)*
	renderTournament: function (item) {
		    // Create new instance of TournamentView
		    var tournamentView = new TournamentView({
		model: item
	    });

		    // Append the rendered HTML to the views element
	    this.$el.append(tournamentView.render().el);
	},

	    // Log message *(custom method)*
	    logMessage: function (message) {
		    console.log(message);
	    }
});