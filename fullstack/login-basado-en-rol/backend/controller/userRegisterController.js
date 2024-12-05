import bcrypt from 'bcrypt'
import { ROLE } from '../utils/role.js'
import { userRegisterRepository } from '../repositories/userRegisterRepository.js'

export const userRegisterController = async (req, res) => {
    try {
        const role = req.user?.role || null
        if (role !== ROLE.ADMIN) return res.status(403).json({ message: 'Unauthorized.' })

        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const result = await userRegisterRepository(req.body)
        return res.status(201).json({
            message: 'User registered successfully.',
            result,
        })
    } catch (error) {
        console.error('Error during user registration:', error)
        return res.status(500).json({ message: error.message })
    }
}