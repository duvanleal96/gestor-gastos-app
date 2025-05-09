import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL ||  'https://qkhhbxhxngrgumibrkag.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFraGhieGh4bmdyZ3VtaWJya2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODQ0NTMsImV4cCI6MjA2MjE2MDQ1M30.8tTR62700UOyFFeOQm2x0XKa8rRsfY3Cdg58uc7YjuQ';
export const supabase = createClient(supabaseUrl, supabaseKey, {
      localStorage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
  });

