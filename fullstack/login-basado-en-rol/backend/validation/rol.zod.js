import { z } from 'zod'

const ROL = ['ADMIN', 'ADMIN_ASSIST', 'USER']

export const rolValidation = z.object({
    name: z
        .string({ message: 'El name debe ser tipo string.' })
        .trim()
        .min(1, { message: "El name no puede estar vacio." })
        .max(20, { message: 'El name debe tener menos de 20 caracteres.' })
        .refine((name) => ROL.includes(name), { message: 'El rol no es valido.', role: ROL }),
})