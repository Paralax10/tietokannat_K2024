const db = require('../database');

const user = {
  getAll: function(callback) {
    return db.query('SELECT * FROM user', callback);
  },
  getById: function(id, callback) {
    return db.query('SELECT * FROM user WHERE id_user=?', [id], callback);
  },
  add: function(user, callback) {
    return db.query('INSERT INTO user (username, password) VALUES (?, ?)', [user.username, user.password], callback);
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM user WHERE id_user=?', [id], callback);
  },
  update: function(id, user, callback) {
    return db.query('UPDATE user SET username=? WHERE id_user=?', [user.username, id], callback);
  }
};

module.exports = user;