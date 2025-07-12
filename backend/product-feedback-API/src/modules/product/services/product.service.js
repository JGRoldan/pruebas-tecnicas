import ProductRepository from '../repositories/product.repository.js'
import HttpException from '../../../shared/errors/HttpException.js'

const ProductService = {
    async createProduct(name, description) {
        return ProductRepository.create({ name, description })
    },

    async getAllProducts() {
        const products = await ProductRepository.findAll()
        return validateAndReturnProducts(products)

    },
    async getAllProductsWithSuggestion() {
        const products = await ProductRepository.findAllWithSuggestion()
        return validateAndReturnProducts(products)

    },
    async getAllProductsWithSuggestionsAndVotes() {
        const products = await ProductRepository.findAllWithSuggestionAndVotes()
        return validateAndReturnProducts(products)

    }
}

function validateAndReturnProducts(products) {
    if (!products || products.length === 0) {
        throw new HttpException(404, 'No products found')
    }
    return products
}

export default ProductService
