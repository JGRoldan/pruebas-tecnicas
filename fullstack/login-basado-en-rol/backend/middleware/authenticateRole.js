import { ROLE } from '../utils/role.js'

const allowedRoles = [ROLE.ADMIN, ROLE.ADMIN_ASSIST]

export const authenticateRole = (req, res, next) => {
    try {
        const { role } = req.user
        if (!allowedRoles.includes(role)) {
            return res.status(403).json({ message: 'Forbidden. Insufficient role.' })
        }

        next()
    } catch (error) {
        console.error('Error verifying token:', error)
        return res.status(403).json({ message: 'Forbidden. Invalid token.' })
    }
}