import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://pilqcuevrztvczfxqdyw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpbHFjdWV2cnp0dmN6ZnhxZHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5NTA3MDcsImV4cCI6MjAyMjUyNjcwN30.sGu2tNSG_Bl3g3HTsRWmuMWzYj61vBhv9AQsNA6SzKI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;