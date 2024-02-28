const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test',
  password: 'xxxx',
  database: 'testi_db'
});
module.exports = connection;