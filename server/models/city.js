const mongoose = require('mongoose');

const City = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now()
	}
});

exports.City = mongoose.model('City', City);
