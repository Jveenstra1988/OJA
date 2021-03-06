var config = {
    tournamentID: 18519,
    access_token: 'e08a55d872',
    api_url: 'https://api.leaguevine.com/v1/pools/18744/',
    season_id: '20167'
};

// Define ranking collection
FED2.Pool = Backbone.Collection.extend({
    // Specifiy model for this collection
	model: FED2.Team,
        
       
        comparator : function(wins) {
		return -wins.get("wins");
	},
        
	// Set the url for the collection
	url: config.api_url,

	// Parse the relevant data from the data object
	parse: function(data) {	    
	    return data.standings;
	}
        
        
        


});