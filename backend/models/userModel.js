import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:{
        type:String,
        min:3,
        max:30,
        required:true
    },
    email:{
        type:String,
        max:255,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model("User", userSchema)