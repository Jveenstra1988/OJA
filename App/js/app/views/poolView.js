// Define pool view
FED2.PoolView = Backbone.View.extend({
	// Define element (this.el)
	el: $("#pool"),

	// Initialize view
    initialize: function () {
		// Specify collection for this view
                this.list = this.$el.find("table.pools");
		this.collection = new FED2.Pool(FED2.poolData);

		this.render();	
		
		this.$el.find("#filter").append(this.createSelect());
		
		// Attach custom event handler
		this.on("change:filterType", this.filterByType, this);
		
		// Attach eventhandlers to collection
                this.collection.on("reset", this.render, this);
		this.collection.on("add", this.renderPool, this);
		this.collection.on("remove", this.removePool, this);

    },
    // Attach event handlers to view elements
	events: {
	    "change #filter select": "setFilter",
		"click #add": "addPool",
		"click #showForm": "showForm"
	},

	// Render view
    render: function () {
        this.$el.find("table.pools").html("<tr class='definitie'><th class='team'>Team</th><th>Win</th><th>Lost</th><th>Sets won</th><th>Sets lost</th><th>Points won</th><th>Points lost</th><th>+/-</th></tr>");

        _.each(this.collection.models, function (item) {
            this.renderPool(item);
        }, this);
    },

	// Render ranking
    renderPool: function (item) {
		// Create new instance of teamView
		var teamView = new FED2.TeamView({
                model: item
        });

		// Append the rendered HTML to the views element
        this.list.append(teamView.render().el);
    },
    
    // Add pool model
	addPool: function (e) {
	    e.preventDefault();
	    var newModel = {};
	    $("#addPool").children("input").each(function (i, el) {
	        if ($(el).val() !== "") {
	            newModel[el.id] = $(el).val();
	      }
	    });
	    FED2.poolData.push(newModel);
	    
	    if (_.indexOf(this.getTypes(), newModel.team) === -1) {
	         this.collection.add(new FED2.Team(newModel));
	        this.$el.find("#filter").find("select").remove().end().append(this.createSelect());
	    } else {
	        this.collection.add(new FED2.Team(newModel));
	    }
	    
	    this.collection.reset(FED2.poolData);
	},
	
	// Remove pool model
	removePool: function (removedModel) {
	    var removed = removedModel.attributes;
	    _.each(FED2.poolData, function (item) {
	        if (_.isEqual(item, removed)) {
	            FED2.poolData.splice(_.indexOf(FED2.poolData, item), 1);
	        }
	    });
	},
    
    // Get types for schedulingFormat select box
	getTypes: function () {
	    return _.uniq(this.collection.pluck("team"), false, function (type) {
	        return type.toLowerCase();
	    });
	},
	
	// Create schedulingFormat select box
	createSelect: function () {
	    var filter = this.$el.find("#filter"),
	        select = $("<select/>", {
	            html: "<option value='all'>all</option>"
	        });
	    _.each(this.getTypes(), function (item) {
	        var option = $("<option/>", {
	            value: item.toLowerCase(),
	            text: item.toLowerCase()
	        }).appendTo(select);
	    });
	    return select;
	},
	
	// Set filter
	setFilter: function (e) {
	    this.filterType = e.currentTarget.value;
	    
		// Trigger custom event handler
		this.trigger("change:filterType");
	},
	
	// Filter the collection
	filterByType: function () {
	    if (this.filterType === "all") {
	        this.collection.reset(FED2.poolData);
	    } else {
	        this.collection.reset(FED2.poolData, { silent: true });
	        var filterType = this.filterType,
	            filtered = _.filter(this.collection.models, function (item) {
	            return item.get("team").toLowerCase() === filterType;
	        });
	        this.collection.reset(filtered);
	    }
	},
        showForm: function (e) {
		e.preventDefault();
	    this.$el.find("#addPool").slideToggle();
	}
});

// Kickstart the application by creating an instance of poolView
FED2.ranking = new FED2.PoolView();