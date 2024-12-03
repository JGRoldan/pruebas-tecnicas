import jwt from 'jsonwebtoken'

export const authenticate = (req, res, next) => {
    const token = req.cookies.authToken
    if (!token) return next()

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded // username, role
        next()
    } catch (err) {
        console.error('Invalid token', err)
        res.status(401).json({ message: 'Unauthorized' })
    }
}
