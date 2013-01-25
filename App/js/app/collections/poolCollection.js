// Define ranking collection
FED2.Pool = Backbone.Collection.extend({
    // Specifiy model for this collection
	model: FED2.Team,

	// Set the url for the collection
	url: config.api_url,

	// Parse the relevant data from the data object
	parse: function(data) {
	    console.log("Data",data);
	    return data.standings;
	    console.log("Data standings",data.standings);

	}


});