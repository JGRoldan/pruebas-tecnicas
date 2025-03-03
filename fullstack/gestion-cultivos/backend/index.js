import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import register from './routes/auth/register.js'
import login from './routes/auth/login.js'
import updateToken from './routes/auth/updateToken.js'
import { authToken } from './middleware/authToken.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', register)
app.use('/api', login)
app.use('/api', updateToken)
app.get('/api/test', authToken, (req, res) => {
    res.send('private route!')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

export default app