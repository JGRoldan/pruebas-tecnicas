import z from 'zod'

const createUserSchema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    email: z.string().email("Debe ser un correo electrónico válido"),
    edad: z.number().min(1).max(99)
})

const updateUserSchema = z.object({
    name: z.string().min(1, "El nombre es requerido").optional(),
    email: z.string().email("Debe ser un correo electrónico válido").optional(),
    edad: z.number().min(1).max(99).optional()
})

const validateUser = (obj) =>{
    return createUserSchema.safeParse(obj)
}

const partialValidateUser = (obj) =>{
    return updateUserSchema.partial(obj)
}

export {validateUser, partialValidateUser}