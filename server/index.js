/**
 * Created by jgluhov on 09/02/16.
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const config = require('./config');
const routes = require('./routes');

mongoose.connect(config.get('database:uri'), config.get('database:options'));

app.use(cors());
app.use('/', routes);

app.listen(config.get('server:port'), () => {
	console.log(`Server is listening on port ${config.get('server:port')}!`);
});