import ProductService from './service.js'
import './alertManager.js'

const ProductController = {
    async getAll(req, res) {
        try {
            const products = await ProductService.getAll()
            res.json(products)
        } catch (error) {
            res.status(500).json({ error: 'Error interno del servidor' })
        }
    },

    async getById(req, res) {
        try {
            const id = Number(req.params.id)
            const product = await ProductService.getById(id)
            if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
            res.json(product)
        } catch (error) {
            res.status(500).json({ error: 'Error interno del servidor' })
        }
    },

    async create(req, res) {
        try {
            const product = await ProductService.create(req.body)
            res.status(201).json(product)
        } catch (error) {
            res.status(500).json({ error: 'Error creando el producto' })
        }
    },

    async update(req, res) {
        try {
            const id = Number(req.params.id)
            const updatedProduct = await ProductService.update(id, req.body)
            if (!updatedProduct) return res.status(404).json({ error: 'Producto no encontrado' })
            res.json(updatedProduct)
        } catch (error) {
            res.status(500).json({ error: 'Error actualizando el producto' })
        }
    },

    async increaseStock(req, res) {
        try {
            const id = Number(req.params.id)
            const product = await ProductService.increaseStock(id)
            if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
            res.json(product)
        } catch (error) {
            res.status(500).json({ error: 'Error incrementando el stock' })
        }
    },

    async decreaseStock(req, res) {
        try {
            const id = Number(req.params.id)
            const product = await ProductService.decreaseStock(id)
            if (!product) return res.status(404).json({ error: 'Producto no encontrado' })
            res.json(product)
        } catch (error) {
            res.status(500).json({ error: 'Error decrementando el stock' })
        }
    },

    async getLowStock(req, res) {
        try {
            const products = await ProductService.getLowStock()
            res.json(products)
        } catch (error) {
            res.status(500).json({ error: 'Error obteniendo productos con bajo stock' })
        }
    }

}

export default ProductController