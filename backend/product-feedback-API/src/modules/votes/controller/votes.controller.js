import { createVoteSchema, paramsSchema } from '../dto/createVoteDto.js'
import VoteService from '../services/votes.services.js'


const VoteController = {

    async create(req, res, next) {
        try {
            const parsed = createVoteSchema.parse(req.body)
            const newVote = await VoteService.createVote(parsed)
            res.status(201).json(newVote)
        } catch (error) {
            next(error)
        }
    },

    async getVotesBySuggestionId(req, res, next) {
        try {
            const validatedParam = validateParam(req.params.suggestionId)
            const votes = await VoteService.getVotesBySuggestionId(validatedParam)
            res.status(200).json(votes)
        } catch (error) {
            next(error)
        }
    },

    async getVoteCountBySuggestionId(req, res, next) {
        try {
            const validatedParam = validateParam(req.params.suggestionId)
            const count = await VoteService.getVoteCountBySuggestionId(validatedParam)
            res.status(200).json(count)
        } catch (error) {
            next(error)
        }
    }
}

function validateParam(suggestionId) {
    const param = paramsSchema.parse({ suggestionId })
    return param.suggestionId
}

export default VoteController