import { createClient } from "@supabase/supabase-js";
import { drizzle } from "drizzle-orm/singlestore/driver";
import { users } from "./schema";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  "https://ytktfobcnmmovnpobtob.supabase.co", // project URL
  process.env.SUPABASE_KEY || ""
);
const schema = {
  users,
};

export const db = drizzle(supabase, { schema });
