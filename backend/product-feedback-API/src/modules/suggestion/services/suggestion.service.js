import SuggestionRepository from '../repositories/suggestion.repository.js'
import ProductRepository from '../../product/repositories/product.repository.js'
import HttpException from '../../../shared/errors/HttpException.js'

const SuggestionService = {

    async createSuggestion(suggestionData) {
        const { productId } = suggestionData
        const product = await ProductRepository.findById(productId)

        if (!product) {
            throw new HttpException(404, `Product with ID ${productId} not found`)
        }

        const suggestion = await SuggestionRepository.create(suggestionData)
        return suggestion
    },

    async getAllSuggestion() {
        const suggestion = await SuggestionRepository.findAll()
        return validateAndReturnSuggestion(suggestion)

    },
}

function validateAndReturnSuggestion(suggestion) {
    if (!suggestion || suggestion.length === 0) {
        throw new HttpException(404, 'No suggestions found')
    }
    return suggestion
}

export default SuggestionService