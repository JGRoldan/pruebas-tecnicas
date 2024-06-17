import express from 'express'
import { userRegister, userLogin } from '../controller/userController.js'
import { userValidated } from '../middleware/userValidated.js'

const router = express.Router()

router
    .post('/register', userValidated, userRegister)
    .post('/login', userValidated, userLogin)

export default router
