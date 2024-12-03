import express from 'express'
import { getAllRolController, createRolController } from '../controller/rolController.js'
import { rolValidation } from '../validation/rol.zod.js'
import { validateSchema } from '../middleware/validateSchema.js'

const rolRoute = express.Router()

rolRoute
    .get('/rol', getAllRolController)
    .post('/rol', [validateSchema(rolValidation)], createRolController)

export default rolRoute