// db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: `postgresql://postgres:${process.env.SupaBasePass}@db.ytktfobcnmmovnpobtob.supabase.co:5432/postgres`,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool);
