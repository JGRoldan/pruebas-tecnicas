import dotenv from 'dotenv'
import app from './app.js'
import { setupSwagger } from './config/swagger.js'

dotenv.config()

const PORT = process.env.PORT || 3000

setupSwagger(app)

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`)
    console.log(`Swagger docs: http://localhost:${PORT}/api-docs`)

})
