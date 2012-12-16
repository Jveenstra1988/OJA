//Tournaments Web App *(Backbone example application)*
/**
 *	Tournaments Web App (Backbone example application)
 *
 *
 */

// Anonymous self-invoked function with jQuery mapped to $
(function ($) {

    // # League data #
    leagueData = [
        { name: "Threesome Ultimate Tournament", schedulingFormat:"regular"},
		{ name: "Wisconsin Swiss 2012", schedulingFormat:"swiss"},
		{ name: "New York City PoNY", schedulingFormat:"regular"},
		{ name: "Swiss Chalet"}
    ];

	// # Define tournament model #
	Tournament = Backbone.Model.extend({
	     // inladen model??
	});

	// # Define league collection #
	League = Backbone.Collection.extend({
	    // inladen collection??
	});

	// # Define tournament view #
	TournamentView = Backbone.View.extend({
	    // inladen view??
	});

	// # Define league view #
	LeagueView = Backbone.View.extend({
	   // inladen view2?
	});

    // Kickstart the application by creating an instance of LeagueView
    var tournaments = new LeagueView();

} (jQuery));