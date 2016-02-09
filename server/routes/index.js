/**
 * Created by jgluhov on 09/02/16.
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.sendStatus(200);
});

module.exports = router;


