import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { router } from './Routes/userRoutes.js'
dotenv.config()

const PORT=process.env.PORT||8000

const app=express()
app.use(express.json())
app.use(cors())
app.use('/api/user', router)
mongoose.connect(process.env.MONGO).then(()=>{
  app.listen(PORT, ()=>{
    console.log(`App is connected to DB && listening to port ${PORT}`)
  })
}).catch((error)=>{
  console.log(error)
})



