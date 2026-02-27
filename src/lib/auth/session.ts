// src/lib/auth/session.ts

import { createSupabaseServerClient } from '../supabase/server';

export async function getSession() {
  const supabase = createSupabaseServerClient();

  const {
    data: { session },
    error
  } = await supabase.auth.getSession();

  if (error) {
    console.error('Session fetching error:', error.message);
    return null;
  }

  return session;
}