import express from 'express'
import { getAllRecipes,getSingleRecipe , postRecipe,deleteRecipe } from '../controllers/recipeController.js'
import { postReview ,getAllReviews , likeRecipe} from '../controllers/reviewController.js'

import authenticate from '../middleware/authentication.js'

const router = express.Router()

//router.use(authenticate)
router.get('/',getAllRecipes)
router.get('/:id',getSingleRecipe)
router.post('/',postRecipe)

router.post('/:id/like',likeRecipe)

router.post('/:id/review',postReview)
router.get('/:id/review',getAllReviews)



router.delete('/:id',deleteRecipe)


export default router
