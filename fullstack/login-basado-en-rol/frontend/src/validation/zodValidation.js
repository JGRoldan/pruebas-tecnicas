import { z } from "zod"

export const schemaCreateProduct = z.object({
    product_name: z.string().min(3, "El nombre de producto debe tener mas de 3 caracteres.").max(40, "El nombre de producto debe tener menos de 40 caracteres."),
    product_description: z.string().min(3, "La descripción del producto debe tener mas de 3 caracteres.").max(40, "La descripción del producto debe tener menos de 40 caracteres."),
    product_price: z
        .string()
        .refine((val) => !isNaN(parseFloat(val)), "El precio debe ser un número válido.")
        .transform((val) => parseFloat(val))
        .refine((val) => val > 0, "El precio debe ser mayor a 0."),
    product_stock: z
        .string()
        .refine((val) => !isNaN(parseInt(val)), "El stock debe ser un número válido.")
        .transform((val) => parseInt(val))
        .refine((val) => val > 0, "El stock debe ser mayor a 0."),
})

export const schemaLogin = z.object({
    username: z.string().min(3, "El username debe tener mas de 3 caracteres.").max(20),
    password: z.string().min(3, "La contraseña debe tener mas de 3 caracteres.").max(20),
})

export const schemaRegister = z.object({
    username: z.string().min(3, "El username debe tener más de 3 caracteres.").max(20),
    password: z.string().min(3, "La contraseña debe tener más de 3 caracteres.").max(20),
    role: z.enum(["1", "2", "3"], "El rol no es valido.")
})