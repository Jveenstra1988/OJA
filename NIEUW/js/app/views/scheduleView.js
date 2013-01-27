/*

	Dit is een tijdelijke schedule omdat ons groepje deze pagina niet maakt.
	Vanuit deze tijdelijk pagina kan worden genavigeerd naar de game pagina.

*/

FED2.ScheduleView = Backbone.View.extend({
	render: function() {
		var tmpl = _.template($('#scheduleTemplate').html());
		$('#wrapper').html( tmpl() );
	}
});