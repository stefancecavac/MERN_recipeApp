import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviewModel = new Schema({
   rating:{
        type:Number,
        min:1,
        max:5,
   },
   comment:{
     type:String,
     required:true
   },
   userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
   }

},{timestamps:true})

export default mongoose.model('Review', reviewModel)