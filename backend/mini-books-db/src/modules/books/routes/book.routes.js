import express from 'express'
import BookController from '../controllers/book.controller.js'

const router = express.Router()

router.get('/', BookController.getAll)
router.get('/:id', BookController.getOne)
router.post('/', BookController.create)

export default router