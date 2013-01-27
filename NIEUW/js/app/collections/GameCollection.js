// Define config settings
var config = {
    tournamentID: 18519,
    access_token: 'c7660d7667',
    api_url: 'https://api.leaguevine.com/v1/game_scores/?tournament_id=18519&access_token=c7660d7667',
    season_id: '20167'
};

// define league, a collection of tournaments
FED2.League = Backbone.Collection.extend({
	initialize: function(models, config) {
		this.id = config.id;
	},
    model: FED2.Set,

    // Set the url for the collection
    url: config.api_url,

    // Parse the relevant data from the data object
    parse: function(data) {
    	// data is API DATA
    	// ugly because we can't use the `GET /game_scores/{score_id}/` call
    	var game = _.find(data.objects, function(gameScore) { return gameScore.game_id == this.id }, this);
        console.log(data.objects);
    	// als game nu leeg is kunnen we de game niet vinden
    	return game.game_sets;
    }
});