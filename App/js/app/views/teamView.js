// Define pool view
FED2.TeamView = Backbone.View.extend({
    // Define element (this.el)
    tagName: "tr",

    // Set reference to template
    template: $("#teamTemplate").html(),

	// Attach event handler to view elements
	events: {
	    "click a.delete": "deletePool"
	},
	
	// Delete pool model
	deletePool: function (e) {
		e.preventDefault();
	    
		var removedType = this.model.get("team").toLowerCase();
	    
		this.model.destroy();
	        this.remove();
	    
		if (_.indexOf(FED2.ranking.getTypes(), removedType) === -1) {
	        FED2.ranking.$el.find("#filter select").children("[value='" + removedType + "']").remove();
	    }
	},



	// Render view
    render: function () {
	// Store template in variable
        var tmpl = _.template(this.template);

	// Inject the rendered template into the views element
        $(this.el).html(tmpl(this.model.toJSON()));

	return this;
    }
});