import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { loginRepository, refreshTokenRepository } from '../../repositorie/auth/loginRepository.js'

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
            return res.status(404).json({ message: 'Farmer not found.' })
        }

        const isPasswordValid = bcrypt.compareSync(password, farmer.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password.' })
        }

        const token = jwt.sign({ username: farmer.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION })
        const refreshToken = jwt.sign({ username: farmer.username }, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_EXPIRATION })

        const updateRefreshToken = await refreshTokenRepository(farmer.id, refreshToken)
        if (!updateRefreshToken) {
            return res.status(500).json({ message: 'Error updating refresh token.' })
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

        return res.status(200).json({ message: 'Farmer logged in successfully.' })

    } catch (error) {
        console.error('Error during farmer login:', error)
        return res.status(500).json({ message: error.message })
    }
}