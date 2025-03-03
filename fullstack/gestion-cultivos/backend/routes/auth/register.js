import express from 'express'
import { registerValidation } from '../../validation/register.zod.js'
import { registerController } from '../../controller/auth/registerController.js'
import { validateSchema } from '../../middleware/validateSchema.js'

const register = express.Router()

register.post('/', validateSchema(registerValidation), registerController)

export default register