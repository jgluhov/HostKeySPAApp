/**
 * Created by jgluhov on 09/02/16.
 */
const mongoose = require('mongoose');

const User = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	city: {
		type: mongoose.Schema.ObjectId,
		ref: 'City'
	},
	institution: {
		type: mongoose.Schema.ObjectId,
		ref: 'Institution'
	},
	created: {
		type: Date,
		default: Date.now()
	}
});

exports.User = mongoose.model('User', User);