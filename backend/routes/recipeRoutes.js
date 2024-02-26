import express from 'express'
import { getAllRecipes, getSingleRecipe, postRecipe, deleteRecipe, getLikedRecipes } from '../controllers/recipeController.js'
import { postReview, getAllReviews, likeRecipe } from '../controllers/reviewController.js'

import authenticate from '../middleware/authentication.js'

const router = express.Router()

router.get('/', getAllRecipes)
router.get('/liked-recipes', authenticate, getLikedRecipes)

router.post('/:id/review', authenticate, postReview)
router.post('/:id/like', authenticate, likeRecipe)
router.get('/:id/review', getAllReviews)

router.post('/', authenticate, postRecipe)
router.get('/:id', getSingleRecipe)
router.delete('/:id', deleteRecipe)

router.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default router
