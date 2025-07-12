import { z } from 'zod'

export const createSuggestionSchema = z.object({
    text: z.string().min(5, 'Text must be at least 5 characters'),
    productId: z.number().int().positive('Product ID must be positive'),
})
