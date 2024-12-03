import express from 'express'
import { registerValidation } from '../validation/register.zod.js'
import { userRegisterController } from '../controller/userRegisterController.js'
import { validateSchema } from '../middleware/validateSchema.js'

const registerRoute = express.Router()

registerRoute
    .post('/register', validateSchema(registerValidation), userRegisterController)

export default registerRoute