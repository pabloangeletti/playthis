var vPlaylist = Backbone.View.extend({

	el: '#sample',

	template: require('views/templates/sample'),

	events: {
		'click': function() {
			alert('Sample Evento');
		}
	},

	initialize: function() {
		this.loadData();
	},
	loadData: function() {
		this.render();
	},
	render: function() {
		var html = this.template();
		this.$el.html( html );
		return this;		
	}

});

module.exports = vPlaylist;