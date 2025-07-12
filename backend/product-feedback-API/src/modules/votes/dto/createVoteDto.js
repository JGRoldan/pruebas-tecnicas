import { z } from 'zod'

export const createVoteSchema = z.object({
    value: z.number({ invalid_type_error: 'Value must be a number' }).int().min(-1).max(1, 'Value must be -1 or 1'),
    suggestionId: z.number({ invalid_type_error: 'Value must be a number' }).int().positive('Suggestion ID must be a positive integer')
})

export const paramsSchema = z.object({
    suggestionId: z.coerce.number().int().positive('Invalid suggestion ID')
})