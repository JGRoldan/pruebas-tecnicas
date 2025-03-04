import express from 'express'
import { getCultivoController } from '../../controller/cultivo/getCultivoController.js'

const getCultivo = express.Router()

getCultivo.get('/:id', getCultivoController)

export default getCultivo