import db from '../../config/db.config.js'

export const loginRepository = async (username) => {
    try {
        const result = await db.agricultorModel.findOne({ where: { username } })
        return result
    } catch (error) {
        console.error('Error during farmer login in repository:', error)
        throw error
    }
}

export const refreshTokenRepository = async (id, refreshToken) => {
    try {
        const result = await db.agricultorModel.findOne({ where: { id } })
        console.log(result)
        const update = await result.update({ refresh_token: refreshToken })
        return update
    } catch (error) {
        console.error('Error during farmer updated refreshtoken in repository:', error)
        throw error
    }
}