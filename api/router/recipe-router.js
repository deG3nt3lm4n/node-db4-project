const express = require('express')
const router = express.Router()
const Recipe = require('../model')

const {validateId} = require('../middleware/middleware')

//GET /api/recipe/:id
// getRecipeById(recipe_id)
router.get('/:id',validateId, (req,res,next) => {
  Recipe.getRecipeById(req.params.id)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      next(err)
    })
});

//post /api/recipe/
router.post('/', (req,res,next) => {

  res.json('posted')

})

module.exports = router;