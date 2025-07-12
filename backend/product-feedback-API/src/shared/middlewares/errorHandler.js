export default function errorHandler(err, req, res, next) {
    console.error(err)

    const statusCode = err.status || 500
    const isZodError = err.name === 'ZodError'

    const errorResponse = {
        success: false,
        status: statusCode,
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        method: req.method,
        message: err.message || 'Internal Server Error',
    }

    // Si es un error de Zod, agregamos detalles
    if (isZodError) {
        errorResponse.validationErrors = err.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
        }))
    }

    res.status(statusCode).json(errorResponse)
}