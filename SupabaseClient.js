import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
    "https://ovoslzmxenrdvvthyens.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92b3Nsem14ZW5yZHZ2dGh5ZW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3NjI1MTIsImV4cCI6MjA0MzMzODUxMn0.6oG-FkqVCE92V7dm-qlzQGNcEwi0bV7H0IZ3_nHiit0"
    );

  export { supabase };