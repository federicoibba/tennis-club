import 'dotenv/config';
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dbCredentials: {
      url: process.env.DB_FILE_NAME!,
  },
  schema: [
    './src/db/schema/',
  ],
  dialect: 'sqlite',
  out: './drizzle',
})
