/**
 * Created by jgluhov on 13.02.16.
 */
const mongoose = require('mongoose');

const Institution = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now()
	}
});

exports.Institution = mongoose.model('Institution', Institution);