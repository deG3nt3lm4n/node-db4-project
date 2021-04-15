
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'apple pie', createdAt: "2021-05-02 08:27:14.120"},
        {recipe_name: 'chicken nuggets', createdAt: "2021-01-03 09:08:19.150"},
        {recipe_name: 'cream cheese', createdAt: "2021-04-01 02:11:19.190"}
      ]);
    });
};
