const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test',
  password: 'xxxx',
  database: 'opinto'
});
module.exports = connection;