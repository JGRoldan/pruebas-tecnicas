import { getAllUserRepository, getUserRepository } from '../repositories/userRepository.js'

export const getAllUserController = async (req, res) => {
    try {
        const result = await getAllUserRepository()
        const users = result.map(user => {
            return {
                id_user: user.id_user,
                username: user.username,
                rol: user.rol.name
            }
        })
        return res.status(200).json(users)
    } catch (error) {
        console.error('Error searching user:', error)
        return res.status(500).json({ message: error.message })
    }
}

export const getUserController = async (req, res) => {
    try {
        const { username } = req.params
        const result = await getUserRepository(username)
        return res.status(200).json(result)
    } catch (error) {
        console.error('Error searching user:', error)
        return res.status(500).json({ message: error.message })
    }
}