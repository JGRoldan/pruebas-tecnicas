import jwt from 'jsonwebtoken'
import { getFarmerByRefreshToken } from '../../repositorie/auth/getFarmerByRefreshToken.js'
import { HTTP_STATUS } from '../../utils/statusCode.js'
import { authConfig } from '../../utils/authConfig.js'

export const updateTokenController = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) {
            return res.status(HTTP_STATUS.FORBIDDEN).json({ message: 'No refresh token provided.', status: HTTP_STATUS.FORBIDDEN })
        }

        const farmer = await getFarmerByRefreshToken(refreshToken)
        if (!farmer) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: 'Farmer not found.', status: HTTP_STATUS.NOT_FOUND })
        }

        const refreshTokenValid = jwt.verify(refreshToken, authConfig.JWT_REFRESH_SECRET)
        if (!refreshTokenValid) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: 'Refresh token expired. Log in.', status: HTTP_STATUS.UNAUTHORIZED })
        }

        // Generate new access token
        const newAccessToken = jwt.sign({ username: farmer.username }, authConfig.JWT_SECRET, { expiresIn: authConfig.EXPIRATION_TIME })

        // Configura la cookie con el token
        res.cookie('authToken', newAccessToken, {
            httpOnly: true,        // Evita acceso desde JavaScript en el navegador
            secure: false, // true en producción para HTTPS
            maxAge: authConfig.COOKIE_EXPIRATION_TIME,
            sameSite: "none",   // Protege contra CSRF
        })

        res.status(HTTP_STATUS.OK).json({ message: 'Token updated successfully.', status: HTTP_STATUS.OK })

    } catch (error) {
        console.error('Error during farmer refresh token:', error)
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: error.message, status: HTTP_STATUS.INTERNAL_SERVER_ERROR })

    }
}