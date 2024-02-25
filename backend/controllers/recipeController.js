import Recipe from '../models/recipeModel.js'
import mongoose from 'mongoose'

const getAllRecipes = async (req, res) => {
    try {
        const recipe = await Recipe.find(req.query).sort({ createdAt: -1 }).populate('reviews')
        res.status(200).json(recipe)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const getSingleRecipe = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'not a valid Id' })
        }
        const recipe = await Recipe.findOne({ _id: id })

        if (!recipe) {
            return res.status(404).json({ error: 'no recipe with that Id' })
        }
        res.status(200).json(recipe)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getLikedRecipes = async (req, res) => {
    const userId = req.user._id
    try {
        const recipe = await Recipe.find({ likes: userId }).sort({ createdAt: -1 }).populate('reviews')
        res.status(200).json(recipe)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const postRecipe = async (req, res) => {
    const { title, description, ingredients, instructions, prepTime, cookTime, servings, calories, difficulty, mealType } = req.body

    try {
        const wrongInput = []
        if (!title) {
            wrongInput.push('title')
        }
        if (!description) {
            wrongInput.push('description')
        }
        if (ingredients.some(ingredient => !ingredient.name || !ingredient.amount)) {
            wrongInput.push('ingredients')
        }
        if (instructions.some(instruction => !instruction.name || !instruction.step)) {
            wrongInput.push('instructions')
        } 
        if (!prepTime) {
            wrongInput.push('prepTime')
        } 
        if (!cookTime) {
            wrongInput.push('cookTime')
        }

        if (!servings) {
            wrongInput.push('servings')
        }
         if (!difficulty) {
            wrongInput.push('difficulty')
        }
        if (!calories) {
            wrongInput.push('calories')
        }
        if (!mealType) {
            wrongInput.push('mealType')
        }
        
        if (wrongInput.length > 0) {
            return res.status(400).json({ error: 'please fill out all fields', wrongInput })

        }
        const recipe = await Recipe.create(req.body)
        res.status(201).json(recipe)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteRecipe = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'not a valid Id' })
        }
        const recipe = await Recipe.findOneAndDelete({ _id: id })

        if (!recipe) {
            return res.status(404).json({ error: 'no recipe with that Id' })
        }
        res.status(200).json(recipe)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { getAllRecipes, getSingleRecipe, postRecipe, deleteRecipe, getLikedRecipes }

