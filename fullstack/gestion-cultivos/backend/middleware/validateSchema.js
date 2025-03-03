// Middleware genérico para validar con Zod
export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        res.status(400).json({
            error: "Validación fallida",
            details: error.errors, // Detalles del error de Zod
        })
    }
}