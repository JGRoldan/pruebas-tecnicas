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
        .max(255, { message: 'El password debe tener menos de 255 caracteres.' }),
    role_id: z.
        number({ message: 'El role_id debe ser tipo number.' })
        .int()
        .positive({ message: 'El role_id debe ser positivo.' })
        .min(1, { message: 'El role_id debe ser mayor a 0.' })
        .optional()
})