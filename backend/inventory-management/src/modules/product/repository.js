import prisma from '../../config/prisma.js'

const ProductRepository = {
    async findAll() {
        return await prisma.producto.findMany({
            include: {
                categoria: true,
                proveedor: true
            },
        })
    },

    async findById(id) {
        return await prisma.producto.findUnique({
            where: { id },
            include: {
                categoria: true,
                proveedor: true
            },
        })
    },

    async create(data) {
        return await prisma.producto.create({ data })
    },

    async decreaseStock(id) {
        return await prisma.producto.update({
            where: { id },
            data: {
                stock: {
                    decrement: 1
                }
            }
        })
    },

    async increaseStock(id) {
        return await prisma.producto.update({
            where: { id },
            data: {
                stock: {
                    increment: 1
                }
            }
        })
    },

    async findWithLowStock() {
        const productos = await prisma.producto.findMany()
        return productos.filter(p => p.stock < p.stockMinimo)
    }

}

export default ProductRepository