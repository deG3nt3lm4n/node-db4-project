
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name',255).notNullable().unique()
      tbl.datetime('createdAt')
    })
    .createTable('steps', tbl => {
      tbl.increments('recipe_steps_id')
      tbl.integer('recipe_steps_number').notNullable()
      tbl.string('recipe_step_instructions',255).notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete("CASCADE")
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name', 255)
    })
    .createTable('step_ingredients', tbl => {
      tbl.increments('step_ingredient_id')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
      tbl.integer('step_ingredient_quantity')
      tbl.integer('recipe_steps_id')
        .unsigned()
        .notNullable()
        .references('recipe_steps_id')
        .inTable('steps')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .createTable('step_ingredients')
    .createTable('ingredients')
    .createTable('steps')
    .createTable('recipes')
};
