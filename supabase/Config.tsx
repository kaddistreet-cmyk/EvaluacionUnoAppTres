import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabaseConfigurado = true

export const supabase = createClient(
    'https://zrcarfibdtnxbpjahpxd.supabase.co', 
    'sb_publishable_a1-s1jU-sBsqmQx4oNUJKA__429TQr7')
