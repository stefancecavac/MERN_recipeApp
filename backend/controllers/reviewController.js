import Review from '../models/reviewModel.js'
import Recipe from '../models/recipeModel.js'
import User from '../models/userModel.js'


const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find(req.query).populate('userId')
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const postReview = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id
    const { rating, comment } = req.body

    try {


        const wrongInput = []
        if (!rating) {
            wrongInput.push('rating')
        }
        if (!comment) {
            wrongInput.push('comment')
        }

        if (wrongInput.length > 0) {
            return res.status(400).json({ error: 'please fill out all fields', wrongInput })
        }
        
        const review = await Review.create({ rating, comment, userId: userId })
        const populatedReview = await Review.findById(review._id).populate('userId');
        const recipe = await Recipe.findByIdAndUpdate({ _id: id }, { $push: { reviews: populatedReview._id } }, { new: true }).populate('reviews')
        res.status(201).json(recipe)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const likeRecipe = async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    try {
        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.json({ error: 'Recipe not found' });
        }

        const likeIndex = recipe.likes.indexOf(userId);

        if (likeIndex !== -1) {
            recipe.likes.splice(likeIndex, 1);
        } else {
            recipe.likes.push(userId);
        }

        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


export { postReview, getAllReviews, likeRecipe }