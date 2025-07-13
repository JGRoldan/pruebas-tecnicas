import { z } from 'zod'

export const CreateBookSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    author: z.string().min(1, 'Author is required'),
    genre: z.string().min(1, 'Genre is required'),
    pages: z.number().int().positive('Pages must be a positive integer'),
    year: z.number().int().min(0).max(new Date().getFullYear()),
    rating: z.number().min(0).max(5),
})