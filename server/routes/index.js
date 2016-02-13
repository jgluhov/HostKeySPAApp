/**
 * Created by jgluhov on 09/02/16.
 */
'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/user').User;
const City = require('../models/city').City;
const Institution = require('../models/institution').Institution;

router.get('/', (req, res) => {
	res.sendStatus(200);
});

router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		res.json({users: users});
	})
});

router.get('/cities', (req, res) => {
	City.find({}, (err, cities) => {
		res.json({cities: cities});
	})
});

router.get('/institutions', (req, res) => {
	Institution.find({}, (err, institutions) => {
		res.json({institutions: institutions});
	})
});

router.post('/users', (req, res) => {
	let name = req.body.name;

	let user = new User({name: name});
	user.save((err, saved) => {
		if (err) throw err;
		res.json({users: saved});
	});
});

router.delete('/users/:id', (req, res) => {
	User.findByIdAndRemove(req.params.id, (err) => {
		if (err) throw err;
		res.json({message: 'OK'});
	});
});

router.post('/cities', (req, res) => {
	let name = req.body.name;

	let city = new City({name: name});
	city.save((err, saved) => {
		if (err) throw err;
		res.json({cities: saved});
	})
});

router.post('/institutions', (req, res) => {
	let name = req.body.name;

	let institution = new Institution({name: name});
	institution.save((err, saved) => {
		if (err) throw err;
		res.json({institutions: saved});
	})
});

module.exports = router;


