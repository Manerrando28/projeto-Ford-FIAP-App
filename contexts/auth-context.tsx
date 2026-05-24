import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ACCOUNT_STORAGE_KEY = '@ford-fiap/auth/account';
const SESSION_STORAGE_KEY = '@ford-fiap/auth/session';

type StoredAccount = {
  name: string;
  email: string;
  password: string;
};

type AuthUser = {
  name: string;
  email: string;
};

type AuthResult = {
  success: boolean;
  message?: string;
};

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isReady: boolean;
  register: (payload: RegisterPayload) => Promise<AuthResult>;
  login: (payload: LoginPayload) => Promise<AuthResult>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function sanitizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function toAuthUser(account: StoredAccount): AuthUser {
  return {
    name: account.name,
    email: account.email,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<StoredAccount | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function hydrateAuth() {
      try {
        const [storedAccount, storedSession] = await Promise.all([
          AsyncStorage.getItem(ACCOUNT_STORAGE_KEY),
          AsyncStorage.getItem(SESSION_STORAGE_KEY),
        ]);

        if (!isMounted) {
          return;
        }

        const parsedAccount = storedAccount ? (JSON.parse(storedAccount) as StoredAccount) : null;
        const sessionEmail = storedSession ? sanitizeEmail(storedSession) : null;

        setAccount(parsedAccount);
        setUser(parsedAccount && sessionEmail === sanitizeEmail(parsedAccount.email) ? toAuthUser(parsedAccount) : null);
      } catch {
        if (isMounted) {
          setAccount(null);
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setIsReady(true);
        }
      }
    }

    hydrateAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const register = async ({ name, email, password, confirmPassword }: RegisterPayload): Promise<AuthResult> => {
    const trimmedName = name.trim();
    const normalizedEmail = sanitizeEmail(email);

    if (!trimmedName) {
      return { success: false, message: 'Informe seu nome para criar a conta.' };
    }

    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      return { success: false, message: 'Informe um email válido.' };
    }

    if (password.length < 6) {
      return { success: false, message: 'A senha deve ter pelo menos 6 caracteres.' };
    }

    if (password !== confirmPassword) {
      return { success: false, message: 'As senhas não conferem.' };
    }

    const nextAccount: StoredAccount = {
      name: trimmedName,
      email: normalizedEmail,
      password,
    };

    await AsyncStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(nextAccount));
    await AsyncStorage.setItem(SESSION_STORAGE_KEY, normalizedEmail);
    setAccount(nextAccount);
    setUser(toAuthUser(nextAccount));

    return { success: true };
  };

  const login = async ({ email, password }: LoginPayload): Promise<AuthResult> => {
    const normalizedEmail = sanitizeEmail(email);

    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      return { success: false, message: 'Informe um email válido.' };
    }

    if (!account) {
      return { success: false, message: 'Crie sua conta para acessar o app.' };
    }

    if (normalizedEmail !== sanitizeEmail(account.email) || password !== account.password) {
      return { success: false, message: 'Email ou senha incorretos.' };
    }

    await AsyncStorage.setItem(SESSION_STORAGE_KEY, normalizedEmail);
    setUser(toAuthUser(account));

    return { success: true };
  };

  const logout = async () => {
    await AsyncStorage.removeItem(SESSION_STORAGE_KEY);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isReady,
      register,
      login,
      logout,
    }),
    [isReady, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}