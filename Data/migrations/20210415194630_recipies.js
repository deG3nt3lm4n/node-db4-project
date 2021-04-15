
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increment('recipe_id')
      tbl.string('recipe_name',255)
        .notNullAble()
        .unique()
      tbl.datetime('createdAt')
    })
    .createTable('steps', tbl => {
      tbl.increment('recipe_steps_id')
      tbl.integer('recipe_steps_number')
        .notNullAble()
      tbl.string('recipe_step_instructions',255)
        .notNullAble()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullAble()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete("CASCADE")
    })
    .createTable('ingredients', tbl => {
      tbl.increment('ingredient_id')
      tbl.string('ingredient_name', 255)
    })
    .createTable('step_ingredients', tbl => {
      tbl.increment('step_ingredient_id')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullAble()
        .references('ingredients_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
      tbl.integer('step_ingredient_quantity')
      tbl.integer('recipe_steps_id')
        .unsigned()
        .notNullAble()
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
