import express from 'express'
import { listCultivosController } from '../../controller/cultivo/listCultivosController.js'

const listCultivos = express.Router()

listCultivos.get('/', listCultivosController)

export default listCultivos