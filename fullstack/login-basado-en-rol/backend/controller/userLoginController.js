import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userLoginRepository } from '../repositories/userLoginRepository.js'

const JWT_SECRET = process.env.SECRET_KEY
const COOKIE_EXPIRATION = 1000 * 60 * 5 // 5 minutes

export const userLoginController = async (req, res) => {
    try {
        const { username, password } = req.body

        const userRecord = await userLoginRepository(username)

        if (!userRecord) {
            return res.status(404).json({ message: 'User doesn\'t exist.' })
        }

        const { username: usernameRecord, password: passwordRecord, rol: { name: role } } = userRecord

        const match = await bcrypt.compare(password, passwordRecord)

        if (!match || !usernameRecord) {
            return res.status(400).json({ message: 'Credentials provided are incorrect.' })
        }

        const token = jwt.sign({ username, role }, JWT_SECRET, { expiresIn: '1d' })

        // Configura la cookie con el token
        res.cookie('authToken', token, {
            httpOnly: true,        // Evita acceso desde JavaScript en el navegador
            secure: process.env.NODE_ENV === 'production' ? true : false,
            maxAge: COOKIE_EXPIRATION,
            sameSite: "none",   // Protege contra CSRF
        })

        return res.status(200).json({ message: 'Login successful', username: usernameRecord, role })

    } catch (error) {
        console.error('Error during user login in controller:', error)
        return res.status(500).json({ message: error.message })
    }

}

export const userLogoutController = (req, res) => {
    res.clearCookie('authToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        sameSite: "none",
    })
    return res.status(200).json({ message: 'Logout successful.' })
}
