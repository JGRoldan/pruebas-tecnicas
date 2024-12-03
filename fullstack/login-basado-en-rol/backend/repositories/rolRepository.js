import db from '../config/db.config.js'

export const getAllRolRepository = async () => {
    try {
        return await db.rolM.findAll()
    } catch (error) {
        console.error("Error obtaining all roles in repository: ", error)
        throw error
    }
}

export const getOneRolRepository = async (name) => {
    try {
        return await db.rolM.findOne({ where: { name } })
    } catch (error) {
        console.error("Error obtaining role in repository: ", error)
        throw error
    }
}

export const createRolRepository = async (role) => {
    try {
        return await db.rolM.create(role)
    } catch (error) {
        console.error("Error creating role in repository: ", error)
        throw error
    }
}