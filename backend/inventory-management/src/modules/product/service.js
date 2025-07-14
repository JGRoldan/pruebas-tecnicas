import ProductRepository from './repository.js'
import stockObserver from '../../observers/stockObserver.js'

const ProductService = {
    async getAll() {
        return await ProductRepository.findAll()
    },

    async getById(id) {
        return await ProductRepository.findById(id)
    },

    async increaseStock(id) {
        const producto = await ProductRepository.increaseStock(id)

        // Verificás si supero el umbral bajo
        stockObserver.notify('stockChanged', producto)

        return producto
    },

    async decreaseStock(id) {
        const producto = await ProductRepository.decreaseStock(id)

        // Disparar alerta si esta en bajo stock
        stockObserver.notify('stockChanged', producto)

        return producto
    },

    async getLowStock() {
        return await ProductRepository.findWithLowStock()
    }
}

export default ProductService