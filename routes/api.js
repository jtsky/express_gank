'use strict'
let express = require('express');
let request = require('request');
let urlEncode = require('urlencode');
let pool = require('../database/mysql-pooling');
let router = express.Router();

router.use((req, res, next)=> {
    pool.getConnection((err, conn)=> {
        if (err) {
            console.log('POOL=====>', err);
            res.send(err.body);
        }
        let selectSQL = 'select * from User';
        conn.query(selectSQL, (err, rows)=> {
            if (err) console.log('query=====>', err);
            if (rows) {
                next();
            } else {
                res.send('error');
            }
            conn.release();
        });
    });
});

router.get('/', (req, res)=> {
    let count = req.query.c;
    let pager = req.query.p;
    request(`http://gank.avosapps.com/api/data/${urlEncode('福利')}/${count}/${pager}`, (error, apiResponse, body)=> {
        if (!error && apiResponse.statusCode == 200) {
            res.send(body);
        }
    });
});

module.exports = router;
