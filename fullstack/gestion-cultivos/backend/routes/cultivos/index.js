import express from 'express'
import listCultivos from './listCultivos.js'
import getCultivo from './getCultivo.js'
// import createCultivo from './createCultivo'

const cultivoRoutes = express.Router()

cultivoRoutes.use('/cultivo', listCultivos)
cultivoRoutes.use('/cultivo', getCultivo)
// cultivoRoutes.use('/cultivo', createCultivo)

export default cultivoRoutes