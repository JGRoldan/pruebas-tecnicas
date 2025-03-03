import express from 'express'
import { registerValidation } from '../../validation/register.zod.js'
import { loginController } from '../../controller/auth/loginController.js'
import { validateSchema } from '../../middleware/validateSchema.js'

const login = express.Router()

login.post('/', validateSchema(registerValidation), loginController)

export default login