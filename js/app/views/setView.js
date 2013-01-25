// define individual tournament view
FED2.SetView = Backbone.View.extend({
    tagName: "tr",
    template: $("#setTemplate").html(),

	// Render view
    render: function () {
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});