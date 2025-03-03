import { HTTP_STATUS } from '../utils/statusCode.js'

// Middleware genérico para validar con Zod
export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            error: "Validación fallida",
            details: error.errors, // Detalles del error de Zod
            status: HTTP_STATUS.BAD_REQUEST
        })
    }
}