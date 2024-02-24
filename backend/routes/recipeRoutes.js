import express from 'express'
import { getAllRecipes,getSingleRecipe , postRecipe,deleteRecipe } from '../controllers/recipeController.js'
import { postReview ,getAllReviews , likeRecipe} from '../controllers/reviewController.js'

import authenticate from '../middleware/authentication.js'

const router = express.Router()

router.get('/',getAllRecipes)
router.get('/:id',getSingleRecipe)
router.get('/:id/review',getAllReviews)

router.use(authenticate)
router.post('/',postRecipe)
router.post('/:id/like',likeRecipe)
router.post('/:id/review',postReview)



router.delete('/:id',deleteRecipe)


export default router
