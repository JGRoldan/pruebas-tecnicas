import prisma from '../../../config/prisma.js'

const BookRepository = {
    async findAll(filters = {}, orderBy = {}, limit = 2, offset = 0) {
        return await prisma.book.findMany({
            where: filters,
            orderBy: orderBy,
            take: limit,
            skip: offset,
        })
    },

    async findById(id) {
        return await prisma.book.findUnique({
            where: { id },
        })
    },

    async create(data) {
        return await prisma.book.create({ data })
    },

    async update(id, data) {
        return await prisma.book.update({
            where: { id },
            data,
        })
    },

    async delete(id) {
        return await prisma.book.delete({
            where: { id },
        })
    }
}

export default BookRepository