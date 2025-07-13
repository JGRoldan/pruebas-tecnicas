import BookService from '../../src/modules/books/services/book.service.js'
import BookRepository from '../../src/modules/books/repositories/book.repository.js'

jest.mock('../../src/modules/books/repositories/book.repository.js')

describe('BookService - getAllBooks', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('devuelve libros desde el repositorio', async () => {
        const fakeBooks = [
            { id: 1, title: 'Mock Book 1' },
            { id: 2, title: 'Mock Book 2' }
        ]

        BookRepository.findAll.mockResolvedValue(fakeBooks)

        const result = await BookService.getAllBooks({ limit: 0, offset: 0 })
        expect(result).toEqual(fakeBooks)
        expect(BookRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('devuelve lista vacía si limit = 0', async () => {
        BookRepository.findAll.mockResolvedValue([])

        const result = await BookService.getAllBooks({ limit: 0 })
        expect(result).toEqual([])
        expect(BookRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('usa limit por defecto si el limit es negativo', async () => {
        const fakeBooks = [{ id: 1, title: 'Libro' }]
        BookRepository.findAll.mockResolvedValue(fakeBooks)

        const result = await BookService.getAllBooks({ limit: -5 })
        expect(result).toEqual(fakeBooks)
        expect(BookRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('no falla con limit muy alto', async () => {
        const fakeBooks = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, title: `Libro ${i + 1}` }))
        BookRepository.findAll.mockResolvedValue(fakeBooks)

        const result = await BookService.getAllBooks({ limit: 10000 })
        expect(result.length).toBeLessThanOrEqual(10000)
        expect(BookRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('usa offset 0 si el offset es negativo', async () => {
        const fakeBooks = [{ id: 1, title: 'Libro' }]
        BookRepository.findAll.mockResolvedValue(fakeBooks)

        const result = await BookService.getAllBooks({ limit: 1, offset: -10 })
        expect(result).toEqual(fakeBooks)
        expect(BookRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('devuelve lista vacía si no hay libros', async () => {
        BookRepository.findAll.mockResolvedValue([])
        const result = await BookService.getAllBooks({})
        expect(result).toEqual([])
        expect(BookRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('funciona con parámetros vacíos', async () => {
        const fakeBooks = [{ id: 1, title: 'Libro' }]
        BookRepository.findAll.mockResolvedValue(fakeBooks)

        const result = await BookService.getAllBooks({})
        expect(result).toEqual(fakeBooks)
        expect(BookRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('devuelve un libro por ID', async () => {
        const fakeBook = { id: 1, title: 'Mock Book' }
        BookRepository.findById.mockResolvedValue(fakeBook)

        const result = await BookService.getBookById(1)
        expect(result).toEqual(fakeBook)
        expect(BookRepository.findById).toHaveBeenCalledWith(1)
    })

    it('devuelve un libro por ID como string', async () => {
        const fakeBook = { id: 1, title: 'Mock Book' }
        BookRepository.findById.mockResolvedValue(fakeBook)

        const result = await BookService.getBookById('1')
        expect(result).toEqual(fakeBook)
        expect(BookRepository.findById).toHaveBeenCalledWith('1')
    })

    it('lanza error si el libro no existe', async () => {
        BookRepository.findById.mockImplementation(async (id) => {
            const fakeDB = [{ id: 1, title: 'Mock Book 1' },]
            return fakeDB.find(book => book.id === id) || null
        })

        const result = await BookService.getBookById(5)
        expect(result).toBeNull()
        expect(BookRepository.findById).toHaveBeenCalledWith(5)
    })

})