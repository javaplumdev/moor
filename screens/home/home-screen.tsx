import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useSignOut from '@/hooks/auth/use-sign-out';
import { useAuth } from '@/components/providers/auth-provider';

export default function HomeScreen() {
  const authProps = useAuth();
  const signOutProps = useSignOut();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello 👋</Text>
      <Text style={styles.email}>{authProps.user?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={signOutProps.onSubmit}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  email: { fontSize: 16, color: '#666', marginBottom: 32 },
  button: {
    backgroundColor: '#ef4444',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
