import db from '../config/db.config.js'

export const getAllUserRepository = async () => {
    try {
        const response = await db.userM.findAll({
            include: [{
                model: db.rolM,
                attributes: ['name']
            }]
        })
        return response
    } catch (error) {
        console.error('Error during user search in repository:', error)
        throw error
    }
}

export const getUserRepository = async (username) => {
    try {
        const response = await db.userM.findOne({
            where: { username }
        })
        return response
    } catch (error) {
        console.error('Error during user search in repository:', error)
        throw error
    }
}

