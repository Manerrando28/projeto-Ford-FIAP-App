import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useResponsiveLayout } from "@/hooks/use-responsive";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetalhesScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { pagePadding, contentMaxWidth, titleSize, bodyTextSize, isCompact } = useResponsiveLayout();

  const comparisons = [
    { id: 'c1', model: 'Ranger', role: 'Trabalho + uso diário', strength: 'Tração 4x4 e robustez', note: 'Boa para quem precisa de equilíbrio entre força e versatilidade.' },
    { id: 'c2', model: 'Maverick', role: 'Uso urbano e lazer', strength: 'Tamanho e eficiência', note: 'Ótima para quem quer picape sem exagero de porte.' },
    { id: 'c3', model: 'Mustang', role: 'Esporte e emoção', strength: 'V8 e presença', note: 'A escolha mais entusiasmada da linha para quem gosta de performance.' },
    { id: 'c4', model: 'Bronco', role: 'Aventura e trilha', strength: 'Capacidade off-road', note: 'Feito para quem valoriza visual, ângulos e uso fora de estrada.' },
  ];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background, padding: pagePadding }]}>
      <View style={[styles.shell, { maxWidth: contentMaxWidth }]}>
        <View style={[styles.hero, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.kicker, { color: colors.accent }]}>Comparador rápido</Text>
          <Text style={[styles.title, { color: colors.text, fontSize: titleSize }]}>Escolha o Ford certo para cada perfil</Text>
          <Text style={[styles.subtitle, { color: colors.mutedText, fontSize: bodyTextSize }]}>Uma visão simples para comparar picapes, esportivos e SUVs da marca antes de abrir a ficha completa.</Text>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={[styles.compareGrid, isCompact && styles.compareGridStack]}>
            {comparisons.map((item) => (
              <View key={item.id} style={[styles.compareCard, { backgroundColor: colors.surfaceMuted }]}>
                <Text style={[styles.compareModel, { color: colors.text }]}>{item.model}</Text>
                <Text style={[styles.compareRole, { color: colors.accent }]}>{item.role}</Text>
                <Text style={[styles.compareStrength, { color: colors.text }]}>{item.strength}</Text>
                <Text style={[styles.compareNote, { color: colors.mutedText }]}>{item.note}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Atalhos</Text>
          <View style={[styles.actionsRow, isCompact && styles.actionsColumn]}>
            <Pressable style={({ pressed }) => [styles.actionButton, { backgroundColor: colors.tint, opacity: pressed ? 0.92 : 1 }]} onPress={() => router.push('/carros')}>
              <Text style={styles.actionButtonText}>Ver carros</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.actionButton, { backgroundColor: colors.surfaceMuted, opacity: pressed ? 0.92 : 1 }]} onPress={() => router.push('/pecas')}>
              <Text style={[styles.actionButtonText, { color: colors.text }]}>Abrir loja</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', paddingVertical: 24, paddingBottom: 32 },
  shell: { width: '100%', gap: 16 },
  hero: { borderWidth: 1, borderRadius: 28, padding: 18, gap: 8 },
  kicker: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.6 },
  title: { lineHeight: 34, fontWeight: '800', letterSpacing: -0.5 },
  subtitle: { fontSize: 15, lineHeight: 22 },
  sectionCard: { borderWidth: 1, borderRadius: 28, padding: 18, gap: 12 },
  sectionTitle: { fontSize: 20, fontWeight: '800', letterSpacing: -0.3 },
  compareGrid: { flexDirection: 'row', gap: 10 },
  compareGridStack: { flexDirection: 'column' },
  compareCard: { flex: 1, borderRadius: 20, padding: 14, gap: 4 },
  compareModel: { fontSize: 18, fontWeight: '800' },
  compareRole: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.4 },
  compareStrength: { fontSize: 14, lineHeight: 20, fontWeight: '700' },
  compareNote: { fontSize: 13, lineHeight: 19 },
  actionsRow: { flexDirection: 'row', gap: 10 },
  actionsColumn: { flexDirection: 'column' },
  actionButton: { flex: 1, borderRadius: 18, paddingVertical: 16, alignItems: 'center' },
  actionButtonText: { color: '#fff', fontSize: 15, fontWeight: '800' },
});
