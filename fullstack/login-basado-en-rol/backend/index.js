import './utils/envConfig.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import loginRoute from './routes/login.js'
import productRoute from './routes/product.js'
import registerRoute from './routes/register.js'
import rolRoute from './routes/rol.js'
import userRoute from './routes/user.js'
import { authenticateRole } from './middleware/authenticateRole.js'
import { authenticateToken } from './middleware/authenticateToken.js'
import { authenticate } from './middleware/authenticate.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
    origin: process.env.ORIGIN, // Dominio del frontend
    credentials: true,               // Permitir envío de cookies
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/api', loginRoute)
app.use('/api', [authenticate], registerRoute)
app.use('/api', [authenticate], productRoute)
app.get('/api/auth/me', [authenticate], (req, res) => {
    if (req.user) return res.json({ username: req.user.username, role: req.user.role })
    return res.status(401).json({ message: 'Not authenticated' })
})
app.use('/api', [authenticateToken, authenticateRole], userRoute)
app.use('/api', [authenticateToken, authenticateRole], rolRoute)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})