import bcrypt from 'bcrypt'
import { registerRepository } from '../../repositorie/auth/registerRepository.js'
import { HTTP_STATUS } from '../../utils/statusCode.js'

export const registerController = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const result = await registerRepository(req.body)
        return res.status(HTTP_STATUS.CREATED).json({
            message: 'Farmer registered successfully.',
            result,
            status: HTTP_STATUS.CREATED
        })
    } catch (error) {
        console.error('Error during farmer registration:', error)
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: error.message, status: HTTP_STATUS.INTERNAL_SERVER_ERROR })
    }
}