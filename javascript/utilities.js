import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tmqexmpecrveukczziib.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

alert("Hello");

async function getLibrary() {
    let { data: Library, error } = await supabase
  .from('Library')
  .select('*')

  alert("Say HI");
}

getLibrary();