import db from '../../config/db.config.js'

export const getFarmerByRefreshToken = async (refreshToken) => {
    try {
        const result = await db.agricultorModel.findOne({ where: { refresh_token: refreshToken } })
        return result
    } catch (error) {
        console.error('Error during farmer get by refresh token:', error)
        throw error
    }
}