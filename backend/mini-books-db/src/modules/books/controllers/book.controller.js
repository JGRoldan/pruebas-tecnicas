import BookService from '../services/book.service.js'
import HttpException from '../../../shared/errors/HttpException.js'
import { BookFilterSchema } from '../dto/book.filter.dto.js'
import { CreateBookSchema } from '../dto/book.create.dto.js'
import { BookIdParamSchema } from '../dto/book.params.dto.js'

const BookController = {
    async getAll(req, res, next) {
        try {
            const validatedQuery = BookFilterSchema.parse(req.query)
            const books = await BookService.getAllBooks(validatedQuery)
            res.json({ status: 'success', results: books.length, data: books })
        } catch (err) {
            next(err)
        }
    },

    async getOne(req, res, next) {
        try {
            const { id } = BookIdParamSchema.parse(req.params)
            const book = await BookService.getBookById(id)
            if (!book) throw new HttpException(404, 'Book not found')
            res.json({ status: 'success', data: book })
        } catch (err) {
            next(err)
        }
    },

    async create(req, res, next) {
        try {
            const validatedBody = CreateBookSchema.parse(req.body)

            const newBook = await BookService.createBook(validatedBody)
            res.status(201).json({
                status: 'success',
                data: newBook
            })
        } catch (err) {
            next(err) // manejador de errores captura ZodError
        }
    }

}

export default BookController
