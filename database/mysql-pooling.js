/**
 * Created by Administrator on 2015/12/25.
 */
'use strict'
let config = require('../config');
let mysql = require('mysql');
let pool = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: config.mysql.port
});

module.exports = pool;