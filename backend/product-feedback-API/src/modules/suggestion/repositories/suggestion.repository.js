import prisma from '../../../config/prisma.js'

const SuggestionRepository = {
    async create(data) {
        return prisma.suggestion.create({ data })
    },

    async findAll() {
        return prisma.suggestion.findMany()
    },
    async findById(id) {
        return prisma.suggestion.findUnique({
            where: { id },
        })
    }
}

export default SuggestionRepository
