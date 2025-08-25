import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: `postgresql://postgres:${process.env.SupaBasePass}@db.ytktfobcnmmovnpobtob.supabase.co:5432/postgres`,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
