import prisma from '../../../config/prisma.js'

const VoteRepository = {
    async create(data) {
        return prisma.vote.create({ data })
    },

    async getVotesBySuggestionId(suggestionId) {
        return prisma.vote.findMany({
            where: { suggestionId },
        })
    },

    async getVoteCountBySuggestionId(suggestionId) {
        const [upvotes, downvotes] = await Promise.all([
            prisma.vote.count({
                where: {
                    suggestionId,
                    value: 1,
                },
            }),
            prisma.vote.count({
                where: {
                    suggestionId,
                    value: -1,
                },
            }),
        ])

        return {
            upvotes,
            downvotes,
            total: upvotes + downvotes,
        }
    }
}

export default VoteRepository
