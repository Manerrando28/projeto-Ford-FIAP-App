import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useResponsiveLayout } from "@/hooks/use-responsive";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExploreScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const { pagePadding, contentMaxWidth, titleSize, bodyTextSize, isCompact } = useResponsiveLayout();

  const news = [
    {
      id: 'n1',
      tag: 'Linha Ford',
      title: 'Ranger e Maverick mostram a força da Ford nas picapes',
      text: 'A marca segue forte em utilitários, com versões para trabalho, aventura e uso urbano.',
    },
    {
      id: 'n2',
      tag: 'Performance',
      title: 'Mustang segue como ícone para quem gosta de carro com presença',
      text: 'O cupê esportivo continua sendo o cartão de visita da Ford para quem busca emoção ao volante.',
    },
    {
      id: 'n3',
      tag: 'Off-road',
      title: 'Bronco reforça o lado aventureiro da marca com foco em trilha',
      text: 'Um nome clássico que conversa com quem quer capacidade fora de estrada e visual marcante.',
    },
  ];

  const tech = [
    { id: 't1', title: '4x4 e 4WD', text: 'Tração para encarar estrada ruim, terra e uso pesado.' },
    { id: 't2', title: 'Assistências modernas', text: 'Mais segurança e conforto na condução diária.' },
    { id: 't3', title: 'Cabines mais completas', text: 'Interior pensado para uso familiar e corporativo.' },
  ];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background, padding: pagePadding }]}>
      <View style={[styles.shell, { maxWidth: contentMaxWidth }]}>
        <View style={[styles.hero, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.kicker, { color: colors.accent }]}>Novidades Ford</Text>
          <Text style={[styles.title, { color: colors.text, fontSize: titleSize }]}>Conteúdo e destaques da marca</Text>
          <Text style={[styles.subtitle, { color: colors.mutedText, fontSize: bodyTextSize }]}>Um espaço editorial para acompanhar picapes, esportivos, SUVs e tecnologias que fazem sentido para quem gosta da Ford.</Text>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Últimas leituras</Text>
          <View style={styles.newsList}>
            {news.map((item) => (
              <Pressable key={item.id} style={({ pressed }) => [styles.newsCard, { backgroundColor: colors.surfaceMuted, opacity: pressed ? 0.94 : 1 }]} onPress={() => router.push('/comparacao')}>
                <Text style={[styles.newsTag, { color: colors.accent }]}>{item.tag}</Text>
                <Text style={[styles.newsTitle, { color: colors.text }]}>{item.title}</Text>
                <Text style={[styles.newsText, { color: colors.mutedText }]}>{item.text}</Text>
                <Text style={[styles.newsAction, { color: colors.tint }]}>Abrir guia</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>O que valoriza a linha Ford</Text>
          <View style={[styles.techGrid, isCompact && styles.techGridStack]}>
            {tech.map((item) => (
              <View key={item.id} style={[styles.techCard, { backgroundColor: colors.surfaceMuted }]}>
                <Text style={[styles.techTitle, { color: colors.text }]}>{item.title}</Text>
                <Text style={[styles.techText, { color: colors.mutedText }]}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <Pressable style={({ pressed }) => [styles.primaryButton, { backgroundColor: colors.tint, opacity: pressed ? 0.92 : 1 }]} onPress={() => router.push('/comparacao')}>
          <Text style={styles.primaryButtonText}>Ver comparador rápido</Text>
        </Pressable>
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
  sectionTitle: { fontSize: 22, fontWeight: '800', letterSpacing: -0.3 },
  newsList: { gap: 10 },
  newsCard: { borderRadius: 22, padding: 16, gap: 6 },
  newsTag: { fontSize: 11, textTransform: 'uppercase', fontWeight: '800', letterSpacing: 0.5 },
  newsTitle: { fontSize: 18, lineHeight: 24, fontWeight: '800', letterSpacing: -0.2 },
  newsText: { fontSize: 14, lineHeight: 21 },
  newsAction: { fontSize: 13, fontWeight: '800' },
  techGrid: { flexDirection: 'row', gap: 10 },
  techGridStack: { flexDirection: 'column' },
  techCard: { flex: 1, borderRadius: 20, padding: 14, gap: 4 },
  techTitle: { fontSize: 15, fontWeight: '800' },
  techText: { fontSize: 13, lineHeight: 19 },
  primaryButton: { borderRadius: 18, paddingVertical: 16, alignItems: 'center' },
  primaryButtonText: { color: '#fff', fontSize: 15, fontWeight: '800' },
});
