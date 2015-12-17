'use strict'
let express = require('express');
let request = require('request');
let urlEncode = require('urlencode');
let router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index.html');
});

module.exports = router;
