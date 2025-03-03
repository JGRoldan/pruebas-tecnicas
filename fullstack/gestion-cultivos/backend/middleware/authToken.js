import jwt from 'jsonwebtoken'
import { HTTP_STATUS } from '../utils/statusCode.js'

const JWT_SECRET = process.env.SECRET_KEY

export const authToken = async (req, res, next) => {
    try {
        const token = req.cookies.authToken
        if (!token) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: 'Unauthorized.', status: HTTP_STATUS.UNAUTHORIZED })
        }

        const decoded = jwt.verify(token, JWT_SECRET)
        req.username = decoded.username
        next()

    } catch (error) {
        console.error('Error during authentication:', error)
        return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: 'Unauthorized.', status: HTTP_STATUS.UNAUTHORIZED })
    }
}