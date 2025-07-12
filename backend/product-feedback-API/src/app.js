import express from 'express'
import productRoutes from './modules/product/product.routes.js'
import suggestionRoutes from './modules/suggestion/suggestion.routes.js'
import votesRoutes from './modules/votes/votes.routes.js'
import errorHandler from './shared/middlewares/errorHandler.js'

const app = express()
app.use(express.json())

app.use('/products', productRoutes)
app.use('/suggestion', suggestionRoutes)
app.use('/votes', votesRoutes)


app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ error: 'Internal Server Error' })
})

app.use(errorHandler)

export default app
