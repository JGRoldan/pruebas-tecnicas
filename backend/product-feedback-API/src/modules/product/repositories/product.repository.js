import prisma from '../../../config/prisma.js'

const ProductRepository = {
    async create(data) {
        return prisma.product.create({ data })
    },

    async findAll() {
        return prisma.product.findMany()
    },
    async findAllWithSuggestion() {
        return prisma.product.findMany({
            include: { suggestions: true },
        })
    },
    async findAllWithSuggestionAndVotes() {
        return prisma.product.findMany({
            include: {
                suggestions: {
                    include: {
                        votes: true
                    }
                }
            }
        })
    },
    async findById(id) {
        return prisma.product.findUnique({
            where: { id },
        })
    },
}

export default ProductRepository
