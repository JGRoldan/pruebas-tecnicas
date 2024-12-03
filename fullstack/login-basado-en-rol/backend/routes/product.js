import express from 'express'
import { authenticateRole } from '../middleware/authenticateRole.js'
import { authenticateToken } from '../middleware/authenticateToken.js'
import { getAllProductsController, createProductController, getProductLogsController, getQuantityCreatedByMeController } from '../controller/productController.js'
import { productValidation } from '../validation/product.zod.js'
import { validateSchema } from '../middleware/validateSchema.js'

const productRoute = express.Router()

productRoute
    .get('/product', getAllProductsController)
    .get('/product/created-by-me', getQuantityCreatedByMeController)
    .get('/product-logs', [authenticateToken, authenticateRole], getProductLogsController)
    .post('/product/create', [validateSchema(productValidation)], createProductController)

export default productRoute