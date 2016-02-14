/**
 * Created by jgluhov on 09/02/16.
 */
'use strict';

const express = require('express');
const url = require('url');
const router = express.Router();
const User = require('../models/user').User;
const City = require('../models/city').City;
const Institution = require('../models/institution').Institution;

router.get('/', (req, res) => {
	res.sendStatus(200);
});

router.get('/users', (req, res) => {
	console.log(req.query);

	User.find({}).populate(['city','institution']).exec((err, users) => {
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
	let user = new User ({
		name: req.body.item.name,
		city: req.body.item.cityID,
		institution: req.body.item.institutionID
	});
	console.log(user);
	user.save((err, saved) => {
		if (err) throw err;
		User.populate(saved, [
			{path: 'city'},
			{path: 'institution'}
		], (err, user) => {
			if(err) throw err;
			res.json({users: user});
		})
	});
});

router.delete('/users/:id', (req, res) => {
	User.findOneAndRemove(req.params.id, (err) => {
		if (err) throw err;
		res.json({message: 'OK'});
	});
});

router.post('/cities', (req, res) => {
	let name = req.body.item.name;

	let city = new City({name: name});
	city.save((err, saved) => {
		if (err) throw err;
		res.json({cities: saved});
	});
});

router.delete('/cities/:id', (req, res) => {
	City.findOneAndRemove(req.params.id, (err) => {
		if (err) throw err;
		res.json({message: 'OK'});
	});
});

router.post('/institutions', (req, res) => {
	let name = req.body.item.name;

	let institution = new Institution({name: name});
	institution.save((err, saved) => {
		if (err) throw err;
		res.json({institutions: saved});
	});
});

router.delete('/institutions/:id', (req, res) => {
	Institution.findOneAndRemove(req.params.id, (err) => {
		if (err) throw err;
		res.json({message: 'OK'});
	});
});

module.exports = router;


