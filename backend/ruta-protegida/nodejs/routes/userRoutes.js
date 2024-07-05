import express from 'express'
import { userRegister, userLogin, userProfile, adminOnly, anyUser } from '../controller/userController.js'
import { userValidated, userPartialValidated } from '../middleware/userValidated.js'
import { isAuthenticated, isAdmin } from '../middleware/auth.js'

const router = express.Router()

router
    .post('/register', [userValidated], userRegister)
    .post('/login', [userPartialValidated], userLogin)
    .get('/profile', [isAuthenticated], userProfile)
    .get('/admin', [isAuthenticated, isAdmin], adminOnly)
    .get('/any', anyUser)

export default router
