import express from 'express'
import { loginValidation } from '../validation/login.zod.js'
import { userLoginController, userLogoutController } from '../controller/userLoginController.js'
import { validateSchema } from '../middleware/validateSchema.js'

const loginRoute = express.Router()

loginRoute
    .post('/login', validateSchema(loginValidation), userLoginController)
    .post('/logout', userLogoutController)

export default loginRoute