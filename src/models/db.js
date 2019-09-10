const db      = require('mysql-promise')();
const config = require('../config');

db.configure(config.db);

module.exports = db;
