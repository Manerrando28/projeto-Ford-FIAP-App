import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [versao, setVersao] = useState("");
  const [atributos, setAtributos] = useState("");
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  const handleSubmit = () => {
    router.push({
      pathname: "/specs",
      params: { marca, modelo, versao, atributos },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <View style={[styles.badge, { backgroundColor: colors.accentSoft }]}>
          <Text style={[styles.badgeText, { color: colors.accent }]}>Ford Intelligence Suite</Text>
        </View>
        <Text style={[styles.title, { color: colors.text }]}>Inteligência competitiva automotiva</Text>
        <Text style={[styles.subtitle, { color: colors.mutedText }]}>Compare veículos, organize atributos e gere especificações com uma interface mais limpa e executiva.</Text>

        <View style={styles.metricsRow}>
          <View style={[styles.metricCard, { backgroundColor: colors.surface }]}>
            <Text style={[styles.metricValue, { color: colors.text }]}>08</Text>
            <Text style={[styles.metricLabel, { color: colors.mutedText }]}>Modelos em catálogo</Text>
          </View>
          <View style={[styles.metricCard, { backgroundColor: colors.surface }]}>
            <Text style={[styles.metricValue, { color: colors.text }]}>24h</Text>
            <Text style={[styles.metricLabel, { color: colors.mutedText }]}>Leitura rápida</Text>
          </View>
        </View>
      </View>

      <View style={[styles.formCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Montar análise</Text>
        <Text style={[styles.sectionSubtitle, { color: colors.mutedText }]}>Preencha os campos abaixo para abrir a ficha técnica.</Text>

        <Text style={[styles.label, { color: colors.text }]}>Marca</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text }]}
          placeholder="Ex: Ford"
          placeholderTextColor={colors.mutedText}
          value={marca}
          onChangeText={setMarca}
        />

        <Text style={[styles.label, { color: colors.text }]}>Modelo</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text }]}
          placeholder="Ex: Ranger"
          placeholderTextColor={colors.mutedText}
          value={modelo}
          onChangeText={setModelo}
        />

        <Text style={[styles.label, { color: colors.text }]}>Versão</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text }]}
          placeholder="Ex: XLS"
          placeholderTextColor={colors.mutedText}
          value={versao}
          onChangeText={setVersao}
        />

        <Text style={[styles.label, { color: colors.text }]}>Atributos técnicos</Text>
        <TextInput
          style={[
            styles.input,
            styles.multilineInput,
            { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text },
          ]}
          placeholder="Ex: Motor 2.0 Turbo, tração 4x4, pacote premium"
          placeholderTextColor={colors.mutedText}
          value={atributos}
          onChangeText={setAtributos}
          multiline
        />

        <Pressable style={({ pressed }) => [styles.primaryButton, { backgroundColor: colors.tint, opacity: pressed ? 0.92 : 1 }]} onPress={handleSubmit}>
          <Text style={styles.primaryButtonText}>Gerar especificações</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 24,
    paddingBottom: 32,
    gap: 18,
  },
  hero: {
    gap: 12,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: "800",
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 620,
  },
  metricsRow: {
    flexDirection: "row",
    gap: 12,
  },
  metricCard: {
    flex: 1,
    borderRadius: 20,
    padding: 16,
    minHeight: 84,
    justifyContent: "space-between",
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "800",
  },
  metricLabel: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
  },
  formCard: {
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  sectionSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
  },
  multilineInput: {
    minHeight: 110,
    textAlignVertical: "top",
  },
  primaryButton: {
    marginTop: 6,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },
});
