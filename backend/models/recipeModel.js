import mongoose from 'mongoose'
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ingredients:[{
        name:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:true
        }
    }],
    instructions:[{
        name:{
            type:String,
            required:true
        },
        step:{
            type:Number,
            required:true
        }
    }],
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
      },
      mealType: {
        type: String,
        enum: ['breakfast', "lunch", "dinner", "snack", "desert"],
        required: true
      },
    prepTime:{
        type:Number,
        required:true
    },
    cookTime:{
        type:Number,
        required:true
    },
    servings:{
        type:Number,
        required:true
    },  
    calories:{
        type:Number,
        required:true
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
},{timestamps:true})

export default mongoose.model('Recipe', recipeSchema)