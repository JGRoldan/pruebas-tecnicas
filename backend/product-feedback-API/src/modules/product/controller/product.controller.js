import { createProductSchema } from '../dto/CreateProductDto.js'
import ProductService from '../services/product.service.js'

const ProductController = {
    async create(req, res, next) {
        try {
            const validatedData = createProductSchema.parse(req.body)
            const product = await ProductService.createProduct(validatedData.name, validatedData.description)
            res.status(201).json(product)
        } catch (error) {
            if (error.name === 'ZodError') {
                return res.status(400).json({ errors: error.errors })
            }
            next(error)
        }
    },

    async list(req, res, next) {
        try {
            const products = await ProductService.getAllProducts()
            res.json(products)
        } catch (error) {
            next(error)
        }
    },
    async listProductWithSuggestion(req, res, next) {
        try {
            const products = await ProductService.getAllProductsWithSuggestion()
            res.json(products)
        } catch (error) {
            next(error)
        }
    },
    async listProductWithSuggestionAndVote(req, res, next) {
        try {
            const products = await ProductService.getAllProductsWithSuggestionsAndVotes()
            res.json(products)
        } catch (error) {
            next(error)
        }
    }
}

export default ProductController
