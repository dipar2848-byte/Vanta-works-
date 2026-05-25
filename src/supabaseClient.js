import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://afgounopvxrmyghtmdmk.supabase.co"
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZ291bm9wdnhybXlnaHRtZG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2OTA2MjksImV4cCI6MjA5NTI2NjYyOX0.4pEuKNI7d6tbnDSI7OyvFjgW83fUZttrohK0otCW8L8"

export const supabase = createClient(supabaseUrl, supabaseKey)