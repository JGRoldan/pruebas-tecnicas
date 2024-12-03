import db from '../config/db.config.js'

export const getAllProductsRepository = async () => {
    try {
        const result = await db.productM.findAll()
        return result
    } catch (error) {
        console.error("Error searching products.", error)
        throw error
    }
}

export const createProductRepository = async (product) => {
    try {
        const result = await db.productM.create(product)
        return result
    } catch (error) {
        console.error("Error creating product.", error)
        throw error
    }
}

export const getProductLogsRepository = async (req, res) => {
    try {
        const result = await db.productLogM.findAll()
        return result
    } catch (error) {
        console.error("Error searching product logs.", error)
        throw error
    }
}

export const getProductByAdminAssistRepository = async (created_by) => {
    try {
        const result = await db.productM.count({
            where: {
                created_by: created_by
            },

        })
        return result
    } catch (error) {
        console.error("Error searching products by admin assist.", error)
        throw error
    }
}