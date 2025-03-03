import express from 'express'
import { updateTokenController } from '../../controller/auth/updateTokenController.js'

const updateToken = express.Router()

updateToken.get('/', updateTokenController)

export default updateToken