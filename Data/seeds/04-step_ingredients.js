
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {ingredient_id: 1, step_ingredient_quantity: 5, recipe_steps_id: 2},
        {ingredient_id: 2, step_ingredient_quantity: 10, recipe_steps_id: 3},
        {ingredient_id: 3, step_ingredient_quantity: 50, recipe_steps_id: 5},
        {ingredient_id: 4, step_ingredient_quantity: 10, recipe_steps_id: 1},
        {ingredient_id: 5, step_ingredient_quantity: 50, recipe_steps_id: 8},
        {ingredient_id: 6, step_ingredient_quantity: 150, recipe_steps_id: 13},
        {ingredient_id: 7, step_ingredient_quantity: 20, recipe_steps_id: 12},
        {ingredient_id: 8, step_ingredient_quantity: 250, recipe_steps_id: 10},
        {ingredient_id: 9, step_ingredient_quantity: 30, recipe_steps_id: 15},
        {ingredient_id: 10, step_ingredient_quantity: 50, recipe_steps_id: 10},
      ]);
    });
};
