import voteRepository from '../repositories/votes.repository.js'
import suggestionRepository from '../../suggestion/repositories/suggestion.repository.js'
import HttpException from '../../../shared/errors/HttpException.js'

const VoteService = {

    async createVote(voteData) {
        const { suggestionId } = voteData
        const suggestion = await suggestionRepository.findById(suggestionId)

        if (!suggestion) {
            throw new HttpException(404, `Suggestion with ID ${suggestionId} not found`)
        }

        const vote = await voteRepository.create(voteData)
        return vote
    },

    async getVotesBySuggestionId(suggestionId) {
        const votes = await voteRepository.getVotesBySuggestionId(suggestionId)
        return validateAndReturnVote(votes)
    },

    async getVoteCountBySuggestionId(suggestionId) {
        const count = await voteRepository.getVoteCountBySuggestionId(suggestionId)
        if (count === 0) {
            throw new HttpException(404, `No votes found for suggestion with ID ${suggestionId}`)
        }
        return count
    }
}

function validateAndReturnVote(vote) {
    if (!vote || vote.length === 0) {
        throw new HttpException(404, 'No votes found')
    }
    return vote
}

export default VoteService