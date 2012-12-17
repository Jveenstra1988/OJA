//Tournaments Web App *(Backbone example application)*
/**
 *	Tournaments Web App (Backbone example application)
 *	
 *
 */

// # League data #
leagueData = [
	{ name: "Threesome Ultimate Tournament", schedulingFormat:"regular"},
	{ name: "Wisconsin Swiss 2012", schedulingFormat:"swiss"},
	{ name: "New York City PoNY", schedulingFormat:"regular"},
	{ name: "Swiss Chalet"}
];

// Create instance of master view
var league = new LeagueView();