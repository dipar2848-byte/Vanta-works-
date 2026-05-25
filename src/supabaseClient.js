import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "PASTE_YOUR_URL"
const supabaseKey = "PASTE_YOUR_ANON_KEY"

export const supabase = createClient(supabaseUrl, supabaseKey)