import { z } from 'zod'

export const registerValidation = z.object({
    username: z
        .string({ message: 'El username debe ser tipo string.' })
        .trim()
        .min(1, { message: "El username no puede estar vacio." })
        .max(20, { message: 'El username debe tener menos de 20 caracteres.' }),
    password: z
        .string({ message: 'El password debe ser tipo string.' })
        .trim()
        .min(1, { message: "El password no puede estar vacio." })
        .max(20, { message: 'El password debe tener menos de 30 caracteres.' }),
})