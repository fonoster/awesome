import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  AWESOME_ACCESS_KEY_ID: z.string(),
  AWESOME_API_KEY: z.string(),
  AWESOME_API_SECRET: z.string(),
  AWESOME_FROM_NUMBER: z.string(),
  AWESOME_TO_NUMBER: z.string(),
  AWESOME_APP_REF: z.string()
});

// This will throw an error if any required env vars are missing
const env = envSchema.parse(process.env);

export const envs = {
  accessKeyId: env.AWESOME_ACCESS_KEY_ID,
  apiKey: env.AWESOME_API_KEY,
  apiSecret: env.AWESOME_API_SECRET,
  fromNumber: env.AWESOME_FROM_NUMBER,
  toNumber: env.AWESOME_TO_NUMBER,
  appRef: env.AWESOME_APP_REF
} as const;
