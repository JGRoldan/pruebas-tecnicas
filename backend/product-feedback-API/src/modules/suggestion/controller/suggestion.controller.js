import { createSuggestionSchema } from '../dto/createSuggestionDto.js'
import SuggestionService from '../services/suggestion.service.js'


const SuggestionController = {

    async create(req, res, next) {
        try {
            const parsed = createSuggestionSchema.parse(req.body)
            const newSuggestion = await SuggestionService.createSuggestion(parsed)
            res.status(201).json(newSuggestion)
        } catch (error) {
            next(error)
        }
    },

    async list(req, res, next) {
        try {
            const suggestion = await SuggestionService.getAllSuggestion()
            res.json(suggestion)
        } catch (error) {
            next(error)
        }
    },
}

export default SuggestionController
