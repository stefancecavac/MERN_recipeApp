import express from 'express'
import { getAllRecipes,getSingleRecipe , postRecipe,deleteRecipe ,getLikedRecipes } from '../controllers/recipeController.js'
import { postReview ,getAllReviews , likeRecipe} from '../controllers/reviewController.js'

import authenticate from '../middleware/authentication.js'

const router = express.Router()

router.get('/',getAllRecipes)
router.get('/liked-recipes',authenticate,getLikedRecipes)

router.get('/:id',getSingleRecipe)
router.get('/:id/review',getAllReviews)

router.post('/',authenticate,postRecipe)
router.post('/:id/like',authenticate,likeRecipe)
router.post('/:id/review',authenticate,postReview)



router.delete('/:id',deleteRecipe)


export default router
