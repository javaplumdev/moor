import React from 'react';
import { supabase } from '@/utils/supabase';
import { useAuth } from '@/components/providers/auth-provider';

const useSignOut = () => {
  const [error, setError] = React.useState<string | null>(null);
  const { setUser } = useAuth();

  const onSubmit = async () => {
    setError(null);
    try {
      await supabase.auth.signOut();
      setUser(null);
      return { success: true };
    } catch (error: any) {
      setError(error.message);
      return { success: false, error: error.message };
    }
  };

  return { onSubmit, error };
};

export default useSignOut;
