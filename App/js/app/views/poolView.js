// Define pool view
FED2.PoolView = Backbone.View.extend({
	// Define element (this.el)
	el: $("#pool"),

	// Initialize view
    initialize: function () {
		// Specify collection for this view
		this.collection = new FED2.Pool(FED2.poolData);

		var filtered = _.filter(this.collection.models, function(data) {
		  	return data.get("Win") == "2";
		});

		this.render(filtered);

    },

	// Render view
    render: function (filter) {
        var self = this;

        _.each(filter, function (item) {
            self.renderPool(item);
        }, this);
    },

	// Render schedule
    renderPool: function (item) {
		// Create new instance of GameView
		var teamView = new FED2.TeamView({
            model: item
        });

		// Append the rendered HTML to the views element
        this.$el.append(teamView.render().el);
    }
});

// Kickstart the application by creating an instance of LeagueView
var ranking = new FED2.PoolView();