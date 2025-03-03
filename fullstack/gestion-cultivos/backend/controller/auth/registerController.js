import bcrypt from 'bcrypt'
import { registerRepository } from '../../repositorie/auth/registerRepository.js'

export const registerController = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const result = await registerRepository(req.body)
        return res.status(201).json({
            message: 'Farmer registered successfully.',
            result,
        })
    } catch (error) {
        console.error('Error during farmer registration:', error)
        return res.status(500).json({ message: error.message })
    }
}