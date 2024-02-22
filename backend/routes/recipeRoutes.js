import express from 'express'
import { getAllRecipes,getSingleRecipe , postRecipe,deleteRecipe } from '../controllers/recipeController.js'
import authenticate from '../middleware/authentication.js'

const router = express.Router()

router.use(authenticate)
router.get('/',getAllRecipes)
router.get('/:id',getSingleRecipe)
router.post('/',postRecipe)
router.delete('/:id',deleteRecipe)

export default router
