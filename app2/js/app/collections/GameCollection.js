// Define config settings
var config = {
    tournamentID: 18519,
    access_token: '109f8a19ae',
    api_url: 'https://api.leaguevine.com/v1/game_scores/?tournament_id=18519',
    season_id: '20167'
}

// define league, a collection of tournaments
FED2.League = Backbone.Collection.extend({
    model: FED2.Set,

    // Set the url for the collection
    url: config.api_url,


    // Parse the relevant data from the data object
    parse: function(data) {
    	console.log(data);
        return data.objects;
    }
});