import React from 'react';
import { supabase } from '@/utils/supabase';

const useSignIn = () => {
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (email: string, password: string) => {
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return { success: true, user: data.user };
    } catch (error: any) {
      setError(error.message);
      return { success: false, error: error.message };
    }
  };

  return { onSubmit, error };
};

export default useSignIn;
