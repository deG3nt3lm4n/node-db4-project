
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {ingredient_id: 1, step_ingredient_quantity: 5, recipe_steps_id: 2},
        {ingredient_id: 2, step_ingredient_quantity: 10, recipe_steps_id: 1},
        {ingredient_id: 3, step_ingredient_quantity: 50, recipe_steps_id: 3}
      ]);
    });
};
