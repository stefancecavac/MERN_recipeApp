//imports
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()
const app = express()

import recipeRouter from './routes/recipeRoutes.js'
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'

//middleware
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use('/api/recipes',recipeRouter)
app.use('/api/user',userRouter)


mongoose.connect(process.env.DB_URI)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`Database connected and Server listening on port ${process.env.PORT}`)
            })
        })
        .catch((error) => {
            console.log(error)
        })





