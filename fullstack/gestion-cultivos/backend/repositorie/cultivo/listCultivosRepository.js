import db from '../../config/db.config.js'

export const listCultivosRepository = async () => {
    try {
        const response = await db.cultivoModel.findAll()
        return response
    } catch (error) {
        console.error('Error during list cultivos in repository:', error)
        throw error
    }
}