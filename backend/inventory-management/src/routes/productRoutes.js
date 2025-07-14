import express from 'express'
import ProductController from '../modules/product/controller.js'

const router = express.Router()

router.get('/', ProductController.getAll)
router.get('/low-stock', ProductController.getLowStock)
router.get('/:id', ProductController.getById)
// router.post('/', ProductController.create) Not implemented yet
// router.put('/:id', ProductController.update) Not implemented yet
router.put('/:id/stock/increase', ProductController.increaseStock)
router.put('/:id/stock/decrease', ProductController.decreaseStock)

export default router