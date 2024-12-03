import express from 'express'
import { getAllUserController, getUserController } from '../controller/userController.js'

const userRoute = express.Router()

userRoute
    .get('/user', getAllUserController)
    .get('/user/:username', getUserController)

export default userRoute