import { z } from 'zod'

export const BookIdParamSchema = z.object({
    id: z.string().regex(/^\d+$/).transform(Number)
})