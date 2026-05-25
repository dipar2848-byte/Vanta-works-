import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://afgounopvxrmyghtmdmk.supabase.co"
const supabaseKey = "sb_publishable_lDGn1V8iXeU3BwaTctM86w_ybASwOTM"
export const supabase = createClient(supabaseUrl, supabaseKey)