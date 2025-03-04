import { listCultivosRepository } from '../../repositorie/cultivo/listCultivosRepository.js'
import { HTTP_STATUS } from '../../utils/statusCode.js'

export const listCultivosController = async (req, res) => {
    try {
        const cultivos = await listCultivosRepository()
        return res.status(HTTP_STATUS.OK).json(cultivos)
    } catch (error) {
        console.error('Error during list cultivos controller', error)
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: error.message, status: HTTP_STATUS.INTERNAL_SERVER_ERROR })
    }
}