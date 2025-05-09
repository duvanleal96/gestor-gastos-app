import { supabase } from '../../lib/supabase';

export const AuthService = {
  async signUp(email: string, password: string, fullName: string) {
    
    const { user, error: authError, session } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      throw authError;
    }

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: user?.id,
        full_name: fullName,
        email: email 
      })
      .single();

    if (profileError) {
      throw profileError;
    }

    return { user, profile: profileData, session };
  },

  async signIn(email: string, password: string) {
    const { user, error, session } = await supabase.auth.signIn({
      email,
      password
    });

    return { 
      data: { user, session }, 
      error 
    };
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  async getCurrentUser() {
    // En v1.35.7 se usa session() para obtener el usuario actual
    const session = supabase.auth.session();
    return session?.user ?? null;
  }
};