import { z } from 'zod'

export const productValidation = z.object({
    product_name: z
        .string({ message: 'product_name debe ser una cadena de texto' })
        .trim()
        .min(3, { message: 'product_name debe tener al menos 3 caracteres' })
        .max(100, { message: 'product_name debe tener como máximo 100 caracteres' }),
    product_description: z
        .string({ message: 'product_description debe ser una cadena de texto' })
        .trim()
        .min(3, { message: 'product_description debe tener al menos 3 caracteres' })
        .max(255, { message: 'product_description debe tener como máximo 255 caracteres' }),
    product_price: z
        .number({ message: 'product_price debe ser un número' })
        .min(1, { message: 'product_price debe ser mayor a 0' }),
    product_stock: z
        .number({ message: 'product_stock debe ser un número' })
        .min(0, { message: 'product_stock debe ser mayor o igual a 0' })
        .int({ message: 'product_stock debe ser un número entero' })
        .positive({ message: 'product_stock debe ser un número positivo' }),
})