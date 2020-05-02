exports.up = function (knex, Promise) {
  return knex.schema.createTable('stock', function (table) {
    table.increments('id').unique().primary();
    table
      .integer('product_id')
      .references('id')
      .inTable('products')
      .notNullable();
    table.integer('amount').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('stock');
};
