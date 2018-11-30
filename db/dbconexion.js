var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xamarin',
    port: 3306
  });
  conn.connect();
module.exports = conn;
  