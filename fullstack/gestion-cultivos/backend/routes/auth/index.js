import express from 'express'
import login from './login.js'
import register from './register.js'
import updateToken from './updateToken.js'

const authRoutes = express.Router()

authRoutes.use('/login', login)
authRoutes.use('/register', register)
authRoutes.use('/updateToken', updateToken)

export default authRoutes