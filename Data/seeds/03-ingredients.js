
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'pie'},
        { ingredient_name: 'apple'},
        { ingredient_name: 'oven'},
        { ingredient_name: 'money'},
        { ingredient_name: 'chicken'},
        { ingredient_name: 'milk'},
        { ingredient_name: 'cow'},
        { ingredient_name: 'nuggets'},
        { ingredient_name: 'cream'},
        { ingredient_name: 'spices'}
      ]);
    });
};
