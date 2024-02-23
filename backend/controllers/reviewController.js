import Review from '../models/reviewModel.js'
import Recipe from '../models/recipeModel.js'



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
    const rating = req.body

    try {
        const review = await Review.create({ ...rating, userId: userId })
        const recipe = await Recipe.findByIdAndUpdate({ _id: id }, { $push: { reviews: review._id } }, { new: true }).populate('reviews')
        res.status(201).json(recipe)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { postReview, getAllReviews }