import { getAllProductsRepository, createProductRepository, getProductLogsRepository, getProductByAdminAssistRepository } from '../repositories/productRepository.js'
import { getUserRepository } from '../repositories/userRepository.js'

export const getAllProductsController = async (req, res) => {
    try {
        const userRole = req.user?.role || null
        const result = await getAllProductsRepository()

        if (userRole === 'ADMIN' || userRole === 'ADMIN_ASSIST') {
            return res.status(200).json({ result })
        }
        const modifiedResult = modifiedData(result)
        return res.status(200).json({ result: modifiedResult })
    } catch (error) {
        console.error("Error obtaining all products: ", error)
        res.status(500).json({ message: error.message })
    }
}

export const getQuantityCreatedByMeController = async (req, res) => {
    try {
        const username = req.user?.username || null

        if (!username) {
            return res.status(401).json({ message: 'You must be logged in to see the quantity of products created by you.' })
        }

        const { id_user } = await getUserRepository(username)

        const result = await getProductByAdminAssistRepository(id_user)
        res.status(200).json({ result })
    } catch (error) {
        console.error("Error obtaining quantity of products created by me: ", error)
        res.status(500).json({ message: error.message })
    }
}

export const createProductController = async (req, res) => {
    try {
        const username = req.user?.username || null
        const { id_user } = await getUserRepository(username)

        const modifiedData = {
            ...req.body,
            created_by: id_user
        }

        const countProducts = await getProductByAdminAssistRepository(id_user)
        if (countProducts > 5) {
            return res.status(403).json({ message: 'You have reached the maximum number of products.' })
        }

        const result = await createProductRepository(modifiedData)
        return res.status(200).json({ message: 'Product created.', result })
    } catch (error) {
        console.error("Error creating product: ", error)
        res.status(500).json({ message: error.message })
    }
}

export const getProductLogsController = async (req, res) => {
    try {
        const result = await getProductLogsRepository(req.params.id)
        res.status(200).json(result)
    } catch (error) {
        console.error("Error obtaining product logs: ", error)
        res.status(500).json({ message: error.message })
    }
}

const modifiedData = (result) => {
    return result.map(({ dataValues }) => ({
        id_product: dataValues.id_product,
        product_name: dataValues.product_name,
        product_description: dataValues.product_description,
        product_price: dataValues.product_price,
        product_stock: dataValues.product_stock,
    }))
}