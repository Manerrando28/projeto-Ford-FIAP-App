import { Redirect } from 'expo-router';

import { useAuth } from '@/contexts/auth-context';

export default function LoginScreen() {
  const { isAuthenticated, isReady } = useAuth();

  if (!isReady) {
    return null;
  }

  return <Redirect href={isAuthenticated ? '/(tabs)' : '/(auth)'} />;
}
