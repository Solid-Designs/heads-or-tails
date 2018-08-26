const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller.js');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', controller.renderIndex);

router.post('/results', controller.renderResults);

module.exports = router;
