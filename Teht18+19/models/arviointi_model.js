const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (name,author,isbn) values(?,?,?)',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set name=?,author=?, isbn=? where id_arviointi=?',
      [arviointi.paivamaara, arviointi.arvosana, opintojakso.id, opiskelija.id],
      callback
    );
  }
};
module.exports = arviointi;