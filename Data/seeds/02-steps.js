
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_steps_number: 1, recipe_step_instructions: 'boil water', recipe_id: 1},
        {recipe_steps_number: 2, recipe_step_instructions: 'turn on stove', recipe_id:3},
        {recipe_steps_number: 3, recipe_step_instructions: 'dance for no reason', recipe_id:2}
      ]);
    });
};
