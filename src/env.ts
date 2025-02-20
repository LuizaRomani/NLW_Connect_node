import { z } from 'zod'

const envSchema = z.object({
    ENVIROMENT: z.string().default('development'),
    PORT: z.coerce.number().default(3333)
})

export const env = envSchema.parse(process.env)