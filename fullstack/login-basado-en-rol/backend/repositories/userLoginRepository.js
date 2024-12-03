import db from '../config/db.config.js'

export const userLoginRepository = async (username) => {
    try {
        const result = await db.userM.findOne({ where: { username }, include: [{ model: db.rolM, attributes: ['name'] }] })
        return result
    } catch (error) {
        console.error('Error during user registration in repository:', error)
        throw error
    }
}
