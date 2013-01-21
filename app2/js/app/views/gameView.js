// define tournaments view
FED2.GameView = Backbone.View.extend({
    el: $("#league"),
	
    initialize: function () {
		this.list = this.$el.find("table.games");

		var self = this;
        this.collection = new FED2.League();

        // Fetch data from the API, this is a "GET" request
        this.collection.fetch({
            // If the request succeeds, the success callback function is executed 
            success: function(data) {
                // Loop through the fetched models 
                _.each(self.collection.models, function(model){
                    // Set the url for each model
                    model.url = model.get('resource_uri');
                });
                // Call the addTournament method
                self.addTournament();
            }
        });

		//this.render();	

		// Attach eventhandlers to collection
        this.collection.on("reset", this.render, this);
		this.collection.on("add", this.renderLeague, this);
    },

	// Render the view
    render: function () {
		this.$el.find("table.games").html("<tr><th class='first'>ID</th><th>Team 1</th><th>Score</th><th>Team 2</th><th class='last'>Score</th></tr>");

		_.each(this.collection.models, function (item) {
        	this.renderLeague(item);
        }, this);
    },

    renderLeague: function (item) {
        var setView = new FED2.SetView({
            model: item
        });

        this.list.append(setView.render().el);
    },

    // Add a tournament
    addTournament: function() {
        // New tournament data
        var tournament = {
            game_id: '87012',
            team_1: 'hallo',
            team_1_score: '0',
            team_2: 'boe',
            team_2_score: '0',
            season_id: config.season_id
        }
        
        // Instantiate a new model and stored it in the variable "newModel"
        // Pass the data to the new model as a parameter
        var newModel = new FED2.Set(tournament);

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


//create instance of master view
FED2.league = new FED2.GameView();