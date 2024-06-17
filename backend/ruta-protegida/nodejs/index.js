import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/userRoutes.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})