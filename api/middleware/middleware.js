const db = require('../../Data/db-config');


async function validateId(req,res,next){
  try {
    const data = await db('recipes')
      .where('recipe_id',req.params.id)
      .first()

    if(!data){
      res.status(404).json({message: `no recipe found with ${req.params.id}`})
    }else{
      next()
    }
  } catch (err) {
    next(err)
  }

}

module.exports = {
  validateId
}