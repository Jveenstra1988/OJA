/*

	404 view

*/

FED2.errorView = Backbone.View.extend({
	render: function() {
		var tmpl = _.template($('#404Template').html());
		$('#wrapper').html( tmpl() );
	}
});