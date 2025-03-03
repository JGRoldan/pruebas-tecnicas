import db from '../../config/db.config.js'

export const registerRepository = async (user) => {
    try {
        const result = await db.agricultorModel.create(user)
        return result
    } catch (error) {
        console.error('Error during farmer registration in repository:', error)
        throw error
    }
}