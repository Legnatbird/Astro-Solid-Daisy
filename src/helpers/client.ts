import { createClient } from '@supabase/supabase-js'

const options = {
  schema: 'public',
  headers: { 'x-my-custom-header': 'Store' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};

const supabase = createClient(
  "https://pbupxphkmiwttnbuhovj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBidXB4cGhrbWl3dHRuYnVob3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5MzMwMjMsImV4cCI6MTk3ODUwOTAyM30.csr6SWxcJ4T7m1AKCp-hDMFSYdME5LPjRuC1HwT3Y34",
  options
);

const { data } = await supabase.from('Products').select();
export { data };