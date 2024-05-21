import express from 'express'
import cors from 'cors'
import { createUserRoutes } from './routes/userRoutes.js'

export const createApp = () =>{
    const app = express()
    const PORT = process.env.PORT || 3001
    
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use('/users', createUserRoutes({ userModel }))

    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
}