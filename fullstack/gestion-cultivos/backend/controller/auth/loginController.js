import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { loginRepository, refreshTokenRepository } from '../../repositorie/auth/loginRepository.js'
import { HTTP_STATUS } from '../../utils/statusCode.js'

const JWT_SECRET = process.env.SECRET_KEY
const JWT_REFRESH_SECRET = process.env.REFRESH_KEY
const JWT_EXPIRATION = '5m'
const JWT_REFRESH_EXPIRATION = '1d'
const COOKIE_EXPIRATION = 1000 * 60 * 60 // 1 hour 
const COOKIE_REFRESH_EXPIRATION = 1000 * 60 * 60 * 24 * 7 // 7 days

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

        const token = jwt.sign({ username: farmer.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION })
        const refreshToken = jwt.sign({ username: farmer.username }, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_EXPIRATION })

        const updateRefreshToken = await refreshTokenRepository(farmer.id, refreshToken)
        if (!updateRefreshToken) {
            return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Error updating refresh token.', status: HTTP_STATUS.INTERNAL_SERVER_ERROR })
        }

        // Configura la cookie con el token
        res.cookie('authToken', token, {
            httpOnly: true,        // Evita acceso desde JavaScript en el navegador
            secure: false, // true en producción para HTTPS
            maxAge: COOKIE_EXPIRATION,
            sameSite: "none",   // Protege contra CSRF
        })

        // Configura la cookie con el refresh token
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,        // Evita acceso desde JavaScript en el navegador
            secure: false, // true en producción para HTTPS
            maxAge: COOKIE_REFRESH_EXPIRATION,
            sameSite: "none",   // Protege contra CSRF
        })

        return res.status(HTTP_STATUS.OK).json({ message: 'Farmer logged in successfully.', status: HTTP_STATUS.OK })

    } catch (error) {
        console.error('Error during farmer login:', error)
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: error.message, status: HTTP_STATUS.INTERNAL_SERVER_ERROR })
    }
}