import User from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const registerUser = async (req, res) => {
    const { email, password, userName } = req.body
        if(!email || !password || !userName){
           return res.status(400).json({error: 'please fill out all fields'})
        }

        if(!validator.isEmail(email)){
           return res.status(400).json({error: 'not a valid email'})
        }
        
        if(!validator.isStrongPassword(password)){
           return res.status(400).json({error: 'not a strong password'})
        }
        
        const emailExist = await User.findOne({email})
        if(emailExist){
              return res.status(400).json({error: 'email already in use'})  
        }

        try{
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)
            const user = await User.create({email , userName , password:hash})
            const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn:'3h'})
            res.cookie('token', token)
            res.status(201).json(user)
        }
        catch(error){
            res.status(500).json({error:error.message})
        }
}

const loginUser = async (req, res) => {
    const { email, password} = req.body
        if(!email || !password){
          return  res.status(400).json({error: 'please fill out all fields'})
        }
        try{
        const user = await User.findOne({email})

        if(!user){
          return  res.status(400).json({error: 'incorrect Email'})
        }
        const compare = await bcrypt.compare(password , user.password)
        if(!compare){
          return  res.status(400).json({error: 'incorrect Password'})
        }
            const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn:'3h'})
            res.cookie('token', token ,{httpOnly:true})
            res.status(201).json(user)
        }
        catch(error){
            res.status(500).json({error:error.message})
        }
}

const logoutUser = async(req, res) => {
    res.clearCookie('token', { httpOnly: true, path: '/' });
    res.status(200).send('Logged out successfully');
}

export {loginUser , registerUser ,logoutUser}