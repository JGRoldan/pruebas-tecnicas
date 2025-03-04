import db from '../../config/db.config.js'

export const getCultivoByIdRepository = async (id) => {
    try {
        const cultivo = await db.cultivoModel.findByPk(id)
        if (!cultivo) {
            throw new Error('Cultivo not found')
        }
        return cultivo
    } catch (error) {
        console.error('Error during get cultivo by ID repository', error)
        throw error
    }
}