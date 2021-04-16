// select
//     *
// from recipes r
// where recipe_id = 1;

// select
//          *
// from recipes r
// left join steps s
//     on s.recipe_id = r.recipe_id
// where r.recipe_id = 1;

// select
//          r.*,
//          s.recipe_steps_id,
//          s.recipe_steps_number,
//          s.recipe_step_instructions,
//          i.ingredient_id,
//          i.ingredient_name,
//          si.step_ingredient_quantity
// from recipes as r
// right join steps as s
//     on s.recipe_id = r.recipe_id
// left join step_ingredients as si
//     on si.recipe_steps_id = s.recipe_steps_id
// left join ingredients as i
//     on i.ingredient_id = si.ingredient_id
// where r.recipe_id = 2;

const db = require('../Data/db-config')

async function getRecipeById(recipeId){

  const recipe = await db('recipes as r')
    .join('steps as s','s.recipe_id','r.recipe_id')
    .leftJoin('step_ingredients as si', 'si.recipe_steps_id', 's.recipe_steps_id')
    .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
    .select('r.*','s.recipe_steps_id','s.recipe_steps_number','s.recipe_step_instructions','i.ingredient_id','i.ingredient_name','si.step_ingredient_quantity')
    .where('r.recipe_id',recipeId)


  const result = {
    recipe_id: recipe[0].recipe_id,
    recipe_name: recipe[0].recipe_name,
    created_at: recipe[0].createdAt,
    steps: recipe.reduce((acc, row) => {

      if(row.ingredient_id === null){
        return acc.concat({
          step_id: row.recipe_steps_id,
          step_number: row.recipe_steps_number,
          instructions: row.recipe_step_instructions
        })
      }

      if(row.ingredient_id && !acc.find(step => step.recipe_steps_id === row.recipe_steps_id)){
        return acc.concat({
          step_id: row.recipe_steps_id,
          step_number: row.recipe_steps_number,
          instructions: row.recipe_step_instructions,
          ingredients: [
            {
              ingredient_id: row.ingredient_id,
              ingredient_name: row.ingredient_name,
              quantity: row.step_ingredient_quantity
            },
          ]
        })
      }

      const currentStep = acc.find(step => step.recipe_steps_id === row.recipe_steps_id)
      currentStep.ingredients.push({
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        quantity: row.quantity
      })

      return acc
    },[])
  }

  return result

}

module.exports = {
  getRecipeById
}