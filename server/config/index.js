/**
 * Created by jgluhov on 09/02/16.
 */
const nconf = require('nconf');
const path = require('path');

nconf.argv()
	.env()
	.file({
		file: path.join(__dirname, 'config.json')
	});

module.exports = nconf;