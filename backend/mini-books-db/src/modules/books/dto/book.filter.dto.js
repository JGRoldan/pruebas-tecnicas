import { z } from 'zod'

export const BookFilterSchema = z.object({
    author: z.string().optional(),
    genre: z.string().optional(),
    minPages: z.string().regex(/^\d+$/).optional(),
    maxPages: z.string().regex(/^\d+$/).optional(),
    year: z.string().regex(/^\d+$/).optional(),
    minRating: z.string().regex(/^\d+(\.\d+)?$/).optional(),
    sort: z.enum(['title', 'year', 'year_desc', 'rating', 'rating_desc']).optional(),

    limit: z.string().regex(/^\d+$/).optional(),
    offset: z.string().regex(/^\d+$/).optional(),
})
