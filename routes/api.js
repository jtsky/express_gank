'use strict'
let express = require('express');
let request = require('request');
let urlEncode = require('urlencode');
let router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
    request(`http://gank.avosapps.com/api/data/${urlEncode('福利')}/100/1`, (error, apiResponse, body)=> {
        if (!error && apiResponse.statusCode == 200) {
            res.send(body);
        }
    });
});

module.exports = router;
