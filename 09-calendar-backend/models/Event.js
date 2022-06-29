const { Schema, model } = require('mongoose');

const EventSchema = Schema({
	title: {
		type: String,
		require: true
	},
	body: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		require: true
	}
});

module.exports = model('Event', EventSchema);