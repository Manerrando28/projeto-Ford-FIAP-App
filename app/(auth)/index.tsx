import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '@/constants/theme';
import { useAuth } from '@/contexts/auth-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useResponsiveLayout } from '@/hooks/use-responsive';

type AuthMode = 'login' | 'register';

export default function AuthScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { pagePadding, contentMaxWidth, titleSize, isCompact } = useResponsiveLayout();
  const { register, login, user } = useAuth();

  const [mode, setMode] = useState<AuthMode>(user ? 'login' : 'login');
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    const result =
      mode === 'register'
        ? await register({ name, email, password, confirmPassword })
        : await login({ email, password });

    setIsSubmitting(false);

    if (!result.success) {
      setError(result.message ?? 'Não foi possível concluir a ação.');
      return;
    }

    setSuccess(mode === 'register' ? 'Conta criada com sucesso.' : 'Login concluído com sucesso.');
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.select({ ios: 'padding', android: undefined })}>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background, padding: pagePadding }]}>
        <View style={[styles.shell, { maxWidth: contentMaxWidth }]}>
          <View style={[styles.hero, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={[styles.badge, { backgroundColor: colors.accentSoft }]}>
              <Text style={[styles.badgeText, { color: colors.accent }]}>Ford Access</Text>
            </View>
            <Text style={[styles.title, { color: colors.text, fontSize: titleSize }]}>Acesso profissional ao catálogo</Text>
            <Text style={[styles.subtitle, { color: colors.mutedText }]}>Entre com uma conta existente ou crie seu acesso para liberar o app completo.</Text>

            <View style={[styles.pillRow, isCompact && styles.pillRowCompact]}>
              <View style={[styles.pill, { backgroundColor: colors.surfaceMuted }]}>
                <Text style={[styles.pillValue, { color: colors.text }]}>Seguro</Text>
                <Text style={[styles.pillLabel, { color: colors.mutedText }]}>Controle de sessão local</Text>
              </View>
              <View style={[styles.pill, { backgroundColor: colors.surfaceMuted }]}>
                <Text style={[styles.pillValue, { color: colors.text }]}>Rápido</Text>
                <Text style={[styles.pillLabel, { color: colors.mutedText }]}>Fluxo simples e direto</Text>
              </View>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={[styles.segment, { backgroundColor: colors.surfaceMuted }]}>
              <Pressable
                style={[styles.segmentButton, mode === 'login' && { backgroundColor: colors.surface, shadowOpacity: 0.08 }]}
                onPress={() => setMode('login')}
              >
                <Text style={[styles.segmentText, { color: mode === 'login' ? colors.text : colors.mutedText }]}>Entrar</Text>
              </Pressable>
              <Pressable
                style={[styles.segmentButton, mode === 'register' && { backgroundColor: colors.surface, shadowOpacity: 0.08 }]}
                onPress={() => setMode('register')}
              >
                <Text style={[styles.segmentText, { color: mode === 'register' ? colors.text : colors.mutedText }]}>Criar conta</Text>
              </Pressable>
            </View>

            <Text style={[styles.sectionTitle, { color: colors.text }]}>{mode === 'login' ? 'Entrar na conta' : 'Criar nova conta'}</Text>
            <Text style={[styles.sectionSubtitle, { color: colors.mutedText }]}>
              {mode === 'login'
                ? 'Use seu email cadastrado para acessar o catálogo e as especificações.'
                : 'Cadastre um acesso para entrar no app sem sair do fluxo.'}
            </Text>

            {mode === 'register' ? (
              <>
                <Text style={[styles.label, { color: colors.text }]}>Nome</Text>
                <TextInput
                  style={[styles.input, { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text }]}
                  placeholder="Seu nome completo"
                  placeholderTextColor={colors.mutedText}
                  value={name}
                  onChangeText={setName}
                />
              </>
            ) : null}

            <Text style={[styles.label, { color: colors.text }]}>Email</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text }]}
              placeholder="usuario@fordfiap.com"
              placeholderTextColor={colors.mutedText}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Text style={[styles.label, { color: colors.text }]}>Senha</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text }]}
              placeholder="Sua senha"
              placeholderTextColor={colors.mutedText}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            {mode === 'register' ? (
              <>
                <Text style={[styles.label, { color: colors.text }]}>Confirmar senha</Text>
                <TextInput
                  style={[styles.input, { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text }]}
                  placeholder="Repita sua senha"
                  placeholderTextColor={colors.mutedText}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
              </>
            ) : null}

            {error ? <Text style={[styles.feedback, { color: colors.danger }]}>{error}</Text> : null}
            {success ? <Text style={[styles.feedback, { color: colors.success }]}>{success}</Text> : null}

            <Pressable
              style={({ pressed }) => [styles.primaryButton, { backgroundColor: colors.tint, opacity: pressed || isSubmitting ? 0.92 : 1 }]}
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              <Text style={styles.primaryButtonText}>{isSubmitting ? 'Processando...' : mode === 'login' ? 'Entrar' : 'Criar conta'}</Text>
            </Pressable>

            <Text style={[styles.helper, { color: colors.mutedText }]}>
              {mode === 'login'
                ? 'Sem conta? Troque para criar uma nova e liberar o app.'
                : 'Já tem acesso? Use o modo de entrada para continuar.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  shell: {
    width: '100%',
    alignSelf: 'center',
    gap: 16,
  },
  hero: {
    borderWidth: 1,
    borderRadius: 28,
    padding: 18,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  title: {
    lineHeight: 38,
    fontWeight: '800',
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },
  pillRow: {
    flexDirection: 'row',
    gap: 10,
  },
  pillRowCompact: {
    flexDirection: 'column',
  },
  pill: {
    flex: 1,
    borderRadius: 18,
    padding: 14,
    gap: 3,
  },
  pillValue: {
    fontSize: 15,
    fontWeight: '800',
  },
  pillLabel: {
    fontSize: 12,
    lineHeight: 16,
  },
  card: {
    borderRadius: 30,
    borderWidth: 1,
    padding: 20,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  segment: {
    flexDirection: 'row',
    padding: 4,
    borderRadius: 20,
    gap: 4,
  },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    paddingVertical: 12,
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  sectionSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
  },
  feedback: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
  },
  primaryButton: {
    marginTop: 4,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },
  helper: {
    fontSize: 13,
    lineHeight: 19,
  },
});