import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { loginRepository, refreshTokenRepository } from '../../repositorie/auth/loginRepository.js'
import { HTTP_STATUS } from '../../utils/statusCode.js'
import { authConfig } from '../../utils/authConfig.js'

export const loginController = async (req, res) => {
    try {
        const { username, password } = req.body
        const farmer = await loginRepository(username)
        if (!farmer) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: 'Farmer not found.', status: HTTP_STATUS.NOT_FOUND })
        }

        const isPasswordValid = bcrypt.compareSync(password, farmer.password)
        if (!isPasswordValid) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: 'Invalid password.', status: HTTP_STATUS.UNAUTHORIZED })
        }

        const token = jwt.sign({ username: farmer.username }, authConfig.JWT_SECRET, { expiresIn: authConfig.EXPIRATION_TIME })
        const refreshToken = jwt.sign({ username: farmer.username }, authConfig.JWT_REFRESH_SECRET, { expiresIn: authConfig.REFRESH_EXPIRATION_TIME })

        const updateRefreshToken = await refreshTokenRepository(farmer.id, refreshToken)
        if (!updateRefreshToken) {
            return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Error updating refresh token.', status: HTTP_STATUS.INTERNAL_SERVER_ERROR })
        }

        // Configura la cookie con el token
        res.cookie('authToken', token, {
            httpOnly: true,        // Evita acceso desde JavaScript en el navegador
            secure: false, // true en producción para HTTPS
            maxAge: authConfig.COOKIE_EXPIRATION_TIME,
            sameSite: "none",   // Protege contra CSRF
        })

        // Configura la cookie con el refresh token
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,        // Evita acceso desde JavaScript en el navegador
            secure: false, // true en producción para HTTPS
            maxAge: authConfig.COOKIE_EXPIRATION_TIME_REFRESH,
            sameSite: "none",   // Protege contra CSRF
        })

        return res.status(HTTP_STATUS.OK).json({ message: 'Farmer logged in successfully.', status: HTTP_STATUS.OK })

    } catch (error) {
        console.error('Error during farmer login:', error)
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: error.message, status: HTTP_STATUS.INTERNAL_SERVER_ERROR })
    }
}