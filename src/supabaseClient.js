import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://afgounopvxrmyghtmdmk.supabase.co"
const supabaseKey = "PASTE_ANON_PUBLIC_KEY_HERE"

export const supabase = createClient(supabaseUrl, supabaseKey)