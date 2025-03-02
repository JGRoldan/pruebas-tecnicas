import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

export default app