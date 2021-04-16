const express = require('express')
const router = express.Router()
const Recipe = require('../model')

const {validateId} = require('../middleware/middleware')

//GET /api/recipe/:id
// getRecipeById(recipe_id)
router.use('/:id',validateId, (req,res,next) => {
  Recipe.getRecipeById(req.params.id)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      next(err)
    })
});

module.exports = router;