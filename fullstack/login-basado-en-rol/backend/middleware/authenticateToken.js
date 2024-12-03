import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.SECRET_KEY

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.authToken
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. No token provided middleware.' })
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded // Adjunta los datos del token al objeto req
        next()
    } catch (error) {
        console.error('Error verifying token:', error)
        return res.status(403).json({ message: 'Forbidden. Invalid token.' })
    }
}