FED2.Team = Backbone.Model.extend({
        defaults: {
        "team": "unknown",
	"Win": "unknown",
	"Lost": "unknown",
	"Sw": "unknown",
	"Sl": "unknown",
	"Pw": "unknown",
	"Pl": "unknown"
        },
	// Initialize model
	initialize: function () {
		// Calculate
		var won = this.get("Pw");
		var lost = this.get("Pl");

		var saldo = won - lost;
		this.set("saldo", saldo)
	}
});