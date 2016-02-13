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
	let name = req.body.data;

	let user = new User({name: name});
	user.save((err, saved) => {
		if (err) throw err;
		res.json({user: saved});
	});
});

router.delete('/users/:id', (req, res) => {
	User.remove({_id: req.params.id}, (err) => {
		if (err) throw err;
		res.json({message: 'OK'});
	});
});

router.post('/cities', (req, res) => {
	res.json({message: 'OK'});
});

router.post('/institutions', (req, res) => {
	res.json({message: 'OK'});
});

module.exports = router;


