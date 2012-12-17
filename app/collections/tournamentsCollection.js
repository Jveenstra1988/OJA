// define tournaments collection
Tournaments = Backbone.Collection.extend({
    model: Tournament,
		
		// Initialize collection *(backbone method)*
		initialize: function () {
			this.logMessage("League collection initialized");
		},
		
		// Log message *(custom method)*
		logMessage: function (message) {
			console.log(message);
		}
});