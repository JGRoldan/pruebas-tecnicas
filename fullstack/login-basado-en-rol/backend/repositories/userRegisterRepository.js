import db from '../config/db.config.js'

export const userRegisterRepository = async (user) => {
    try {
        const result = await db.userM.create(user)
        return result
    } catch (error) {
        console.error('Error during user registration in repository:', error)
        throw error
    }
}