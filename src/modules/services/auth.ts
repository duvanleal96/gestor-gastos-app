import { supabase } from '../../lib/supabase';

export const AuthService = {
    async signUp(email: string, password: string, name: string, phone: string) {
        const { user, error: authError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (authError) {throw authError;}

        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: user?.id,
            name: name,
            email: email,
            phone: phone,
          })
          .single();

        if (profileError) {throw profileError;}
        console.log(user, 'user creado');
        return { user };
      },

  async signIn(email: string, password: string) {
    const { user, error, session } = await supabase.auth.signIn({
      email,
      password,
    });

    return {
      data: { user, session },
      error,
    };
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  async getCurrentUser() {
    const session = supabase.auth.session();
    return session?.user ?? null;
  },
};
