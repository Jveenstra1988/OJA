// Define pool view
FED2.PoolView = Backbone.View.extend({
    // Define element (this.el)
    el: $("#wrapper"),

    // Initialize view
    initialize: function () {
	var self = this;
        // Specify collection for this view
        this.list = this.$el.find("table.pools");

        this.collection = new FED2.Pool();
	this.collection.fetch({
            // If the request succeeds, the success callback function is executed
            success: function(data) {
                // Loop through the fetched models
                _.each(self.collection.models, function(model){
                    // Set the url for each model
                    model.url = model.get('resource_uri');

                });
		self.render();

                // Call the addTournament method
                self.addTournament();
            }
        });


    },
    template: $("#poolTemplate").html(),
    // Render view
    render: function () {
	var tmpl = _.template(this.template);;
        this.$el.html(tmpl());
	this.list = this.$el.find(".pool");
        this.$el.find("table.pools").html("");

        _.each(this.collection.models, function (item) {
	    console.log(item.toJSON());
            this.renderPool(item);
        }, this);
    },

    // Render ranking
    renderPool: function (item) {
	console.log(item.toJSON());
        // Create new instance of teamView
        var teamView = new FED2.TeamView({
            model: item
        });

        // Append the rendered HTML to the views element
        this.list.append(teamView.render().el);
    },

    // Add a tournament
    addTournament: function() {
        // New tournament data
        var tournament = {
            name: 'B',
            start_time: '2013-03-04T09:00:00+01:00',
            tournament_id: '18519'
            //season_id: config.season_id
        }

        // Instantiate a new model and stored it in the variable "newModel"
        // Pass the data to the new model as a parameter
        var newModel = new FED2.Team(tournament);

        // Set the API url
        newModel.url = config.api_url;

        // Save a new model to the API, this is a "POST" request
        // the save function takes two parameters,

        newModel.save(
            // The first parameter is the data object
            newModel.toJSON(), {
            // The second parameter takes request options
            success: function(data) {
                // On succes set the new url for the model
                newModel.url = newModel.get('resource_uri');

            },
            error: function(data) {
                // On error log the error in the console
                console.log('error');
            },
            // Define an authorization header to allow for posting to the API
            headers: {
                Authorization: 'bearer '+config.access_token
            }
        });
    }
});

