import { getCultivoByIdRepository } from '../../repositorie/cultivo/getCultivoByIdRepository.js'
import { HTTP_STATUS } from '../../utils/statusCode.js'

export const getCultivoController = async (req, res) => {
    try {
        const { id } = req.params
        const cultivo = await getCultivoByIdRepository(id)
        return res.status(HTTP_STATUS.OK).json(cultivo)

    } catch (error) {
        console.error('Error during get cultivo by ID controller', error)
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: error.message, status: HTTP_STATUS.INTERNAL_SERVER_ERROR })

    }
}