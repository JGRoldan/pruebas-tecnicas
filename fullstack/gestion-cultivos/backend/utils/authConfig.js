export const authConfig = {
    JWT_SECRET: process.env.SECRET_KEY,              // Secreto para el JWT
    JWT_REFRESH_SECRET: process.env.REFRESH_KEY,     // Secreto para el Refresh Token
    EXPIRATION_TIME: '1h',                            // Expiración del JWT
    COOKIE_EXPIRATION_TIME: 1000 * 60 * 60,           // Expiración de la cookie con el JWT
    REFRESH_EXPIRATION_TIME: '7d',                    // Expiración del Refresh Token y cookie refreshToken
    COOKIE_EXPIRATION_TIME_REFRESH: 1000 * 60 * 60 * 24 * 7, // Expiración de la cookie con el Refresh Token
}