// define tournament model
Tournament = Backbone.Model.extend({
    defaults: {
			"name": "Tournament name unknown",
			"schedulingFormat":"unknown"
		},

		// Initialize model *(backbone method)*
		initialize: function () {
			this.logMessage("Tournament model initialized");
		},

		// Log message *(custom method)*
		logMessage: function (message) {
			console.log(message);
		}
});