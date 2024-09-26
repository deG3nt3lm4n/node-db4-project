
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_steps_number: 1, recipe_step_instructions: 'Go to store', recipe_id: 1},
        {recipe_steps_number: 2, recipe_step_instructions: 'Buy a pie', recipe_id: 1},
        {recipe_steps_number: 3, recipe_step_instructions: 'Buy a apples', recipe_id: 1},
        {recipe_steps_number: 4, recipe_step_instructions: 'Go home', recipe_id: 1},
        {recipe_steps_number: 5, recipe_step_instructions: 'Put it in oven', recipe_id: 1},
        {recipe_steps_number: 6, recipe_step_instructions: 'Wait 30 minute, till done', recipe_id: 1},
        {recipe_steps_number: 1, recipe_step_instructions: 'Go to backyard', recipe_id:2},
        {recipe_steps_number: 2, recipe_step_instructions: 'find a chicken', recipe_id:2},
        {recipe_steps_number: 3, recipe_step_instructions: 'take its nuggets', recipe_id:2},
        {recipe_steps_number: 4, recipe_step_instructions: 'season nuggets with spices', recipe_id:2},
        {recipe_steps_number: 5, recipe_step_instructions: 'cook for 30 minute till done', recipe_id:2},
        {recipe_steps_number: 1, recipe_step_instructions: 'Find a cow', recipe_id:3},
        {recipe_steps_number: 2, recipe_step_instructions: 'milk the cow', recipe_id:3},
        {recipe_steps_number: 3, recipe_step_instructions: 'wait til milk is cheese', recipe_id:3},
        {recipe_steps_number: 4, recipe_step_instructions: 'put cream and boom', recipe_id:3},
      ]);
    });
};
