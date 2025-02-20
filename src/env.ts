import { z } from 'zod'

const envSchema = z.object({
  ENVIRONMENT: z.string().default('development'),
  PORT: z.coerce.number().default(3333),
  POSTGRES_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  WEB_URl: z.string().url(),
})

export const env = envSchema.parse(process.env)
