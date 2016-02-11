/**
 * Created by jgluhov on 09/02/16.
 */
'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

router.get('/', (req, res) => {
	res.sendStatus(200);
});

router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		res.json({users: users});
	})
});

router.get('/cities', (req, res) => {
	res.json({message: 'OK'});
});

router.get('/institutions', (req, res) => {
	res.json({message: 'OK'});
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


