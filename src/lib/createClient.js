import { createClient } from "@supabase/supabase-js";

const supabaseUrl = `https://${process.env.SUPABASE_PROJECT_URL}.supabase.co`;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
