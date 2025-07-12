import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Product Feedback API',
            version: '1.0.0',
            description: 'API para gestionar productos y sugerencias de mejora',
        },
    },
    apis: ['./src/modules/**/*.js'], // Rutas a los archivos donde se escribe la documentación
}

const swaggerSpec = swaggerJSDoc(options)

export function setupSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
