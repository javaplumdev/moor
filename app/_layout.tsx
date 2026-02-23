import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme, Platform } from 'react-native';
import IndexProviders from '@/components/providers/index-providers';
import { LogBox } from 'react-native';

// Suppress useLayoutEffect SSR warning from third-party dependencies (e.g. react-native-safe-area-context, supabase)
LogBox.ignoreLogs(['useLayoutEffect does nothing on the server']);

if (Platform.OS === 'web') {
  const _consoleError = console.error.bind(console);
  console.error = (...args: Parameters<typeof console.error>) => {
    if (typeof args[0] === 'string' && args[0].includes('useLayoutEffect')) return;
    _consoleError(...args);
  };
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <IndexProviders>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
      </Stack>
    </IndexProviders>
  );
}
