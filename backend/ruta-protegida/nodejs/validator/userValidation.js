import z from 'zod'

const createUserSchema = z.object({
    email: z.string().email({message: 'Ingrese un correo electrónico válido.'}),
    password: z.string().min(4, {message: 'La contraseña debe tener minimo de 4 caracteres.'}),
    role: z.enum(['user', 'admin'], {message: 'Ingrese un rol valido.'})
})

const validateUser = (obj) =>{
    return createUserSchema.safeParse(obj)
}

export { validateUser }