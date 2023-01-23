import { z } from 'zod';

const envSchema = z.object({
  // your env
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
});

export const serverEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
};
export const env = envSchema.parse(serverEnv);
