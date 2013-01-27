    // Define pool view
FED2.PoolView = Backbone.View.extend({
    // Define element (this.el)
    el: $("#wrapper"),

    // Initialize view
    initialize: function () {
	var self = this;
        // Specify collection for this view
        this.list = this.$el.find("table.pools");

        this.collection = new FED2.Pool();
	this.collection.fetch({
            // If the request succeeds, the success callback function is executed
            success: function(data) {
                // Loop through the fetched models
                _.each(self.collection.models, function(model){
                    // Set the url for each model
                    model.url = model.get('resource_uri');

                });
		self.render();
                
            }
        });
    },
    template: $("#poolTemplate").html(),
    // Render view
    render: function () {
	var tmpl = _.template(this.template);;
        this.$el.html(tmpl());
	this.list = this.$el.find(".pool");
        this.$el.find("table.pools").html("");

        _.each(this.collection.models, function (item) {
	    console.log(item.toJSON());
            this.renderPool(item);
        }, this);
    },

    // Render ranking
    renderPool: function (item) {
	console.log(item.toJSON());
        // Create new instance of teamView
        var teamView = new FED2.TeamView({
            model: item
        });

        // Append the rendered HTML to the views element
        this.list.append(teamView.render().el);
    }
});

