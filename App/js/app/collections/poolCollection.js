// Define schedule collection
FED2.Pool = Backbone.Collection.extend({
    // Specifiy model for this collection
	model: FED2.Team,

	// Initialize collection
	comparator : function(team) {
		return team.get("team");

	}


});