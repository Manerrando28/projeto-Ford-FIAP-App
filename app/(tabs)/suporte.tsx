import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function SuporteScreen() {
  const [descricao, setDescricao] = useState("");
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Suporte ao cliente</Text>
      <Text style={[styles.subtitle, { color: colors.mutedText }]}>Um fluxo mais claro para abertura de chamados e contato direto.</Text>

      <View style={[styles.contactCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.contactTitle, { color: colors.text }]}>Entre em contato</Text>
        <Text style={[styles.contactText, { color: colors.mutedText }]}>Telefone: (11) 4002-8922</Text>
        <Text style={[styles.contactText, { color: colors.mutedText }]}>Email: suporte@fordfiap.com</Text>
      </View>

      <View style={[styles.formCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.contactTitle, { color: colors.text }]}>Abrir chamado</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.surfaceMuted, borderColor: colors.border, color: colors.text }]}
          placeholder="Descreva seu problema"
          placeholderTextColor={colors.mutedText}
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        <Pressable style={({ pressed }) => [styles.primaryButton, { backgroundColor: colors.tint, opacity: pressed ? 0.92 : 1 }]} onPress={() => alert(`Chamado aberto: ${descricao}`)}>
          <Text style={styles.primaryButtonText}>Abrir chamado</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 24,
    gap: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 4,
  },
  contactCard: {
    padding: 16,
    borderRadius: 22,
    borderWidth: 1,
    gap: 8,
  },
  formCard: {
    padding: 16,
    borderRadius: 22,
    borderWidth: 1,
    gap: 12,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  contactText: {
    fontSize: 14,
    lineHeight: 21,
  },
  input: {
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 100,
    textAlignVertical: "top",
  },
  primaryButton: {
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },
});
