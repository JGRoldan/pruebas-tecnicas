import BookRepository from '../repositories/book.repository.js'
import { buildSpecifications } from '../filters/book.specifications.js'
import { getSortStrategy } from '../strategies/sort.strategy.js'

const BookService = {
    async getAllBooks(query) {
        const filters = buildSpecifications(query)
        const orderBy = getSortStrategy(query.sort)

        const limit = query.limit ? parseInt(query.limit) : undefined
        const offset = query.offset ? parseInt(query.offset) : undefined

        return BookRepository.findAll(filters, orderBy, limit, offset)
    },

    async getBookById(id) {
        return await BookRepository.findById(id)
    },

    async createBook(bookData) {
        return await BookRepository.create(bookData)
    },
}

export default BookService