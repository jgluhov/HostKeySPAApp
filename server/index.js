/**
 * Created by jgluhov on 09/02/16.
 */
const express = require('express');
const cors = require('cors');

const app = express();

const config = require('./config');
const routes = require('./routes');

app.use(cors());
app.use('/', routes);

app.listen(config.get('server:port'), () => {
	console.log(`Server is listening on port ${config.get('server:port')}!`);
});