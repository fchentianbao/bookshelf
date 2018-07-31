module.exports  = function() {

const config = require('../config')
var knex = require('knex')(config.db);

  knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.string('name', 100);
        t.string('password', 100);
        t.string('email', 100);
      });
    }
  });

  knex.schema.hasTable('books').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('books', function(t) {
        t.increments('id').primary();
        t.string('bkname', 100);
        t.string('bisbn', 100);
        t.string('bpress', 100);
        t.date('bpublishtime');
        t.string('author', 100);
        t.string('btype', 100);
        t.text('bctx');
        t.text('bremarke');
        t.float('bprice');
      });
    }
  });
}