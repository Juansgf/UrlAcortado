
exports.up = function (knex) {
    return knex.schema.createTable("urls", (table) => {
      table.increments("id");
      table.string("original", 1024).notNullable();
      table.string("token", 512);
      table.string("nuevo", 512).defaultTo("none");
      table.integer("redir").defaultTo(0);
    });
  };
  
  exports.down = function (knex) {

  };
