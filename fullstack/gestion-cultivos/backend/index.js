import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import authRoutes from './routes/auth/index.js'
import { authToken } from './middleware/authToken.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)

app.get('/api/test', authToken, (req, res) => {
    res.send('private route!')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

export default app