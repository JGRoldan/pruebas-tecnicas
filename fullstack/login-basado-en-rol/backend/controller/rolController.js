import { createRolRepository, getAllRolRepository, getOneRolRepository } from '../repositories/rolRepository.js'

export const getAllRolController = async (req, res) => {
    try {
        const result = await getAllRolRepository()
        res.status(200).json(result)
    } catch (error) {
        console.error("Error obtaining roles: ", error)
        res.status(500).json({ message: error.message })
    }
}

export const createRolController = async (req, res) => {
    try {
        const { name } = req.body

        const existingRole = await getOneRolRepository(name)
        if (existingRole) {
            return res.status(400).json({ message: 'Role already exists.' })
        }

        const result = await createRolRepository(req.body)
        res.status(200).json({ message: 'Created role.', result })
    } catch (error) {
        console.error("Error creating role: ", error)
        res.status(500).json({ message: error.message })
    }
}