import express from 'express'
import bookRoutes from './modules/books/routes/book.routes.js'
import errorHandler from './shared/middlewares/errorHandler.js'

const app = express()
app.use(express.json())

app.use('/api/books', bookRoutes)

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ error: 'Internal Server Error' })
})

app.use(errorHandler)

export default app