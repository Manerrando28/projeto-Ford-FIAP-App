import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { FlatList, StyleSheet, Text, View } from "react-native";

const pecas = [
  { id: "1", nome: "Filtro de Óleo", preco: "R$ 80,00", estoque: "Disponível" },
  { id: "2", nome: "Pastilha de Freio", preco: "R$ 250,00", estoque: "Disponível" },
  { id: "3", nome: "Amortecedor", preco: "R$ 600,00", estoque: "Sob encomenda" },
  { id: "4", nome: "Bateria 60Ah", preco: "R$ 480,00", estoque: "Disponível" },
  { id: "5", nome: "Filtro de Ar", preco: "R$ 120,00", estoque: "Disponível" },
  { id: "6", nome: "Disco de Freio", preco: "R$ 350,00", estoque: "Sob encomenda" },
  { id: "7", nome: "Correia Dentada", preco: "R$ 200,00", estoque: "Disponível" },
  { id: "8", nome: "Velas de Ignição", preco: "R$ 150,00", estoque: "Disponível" },
  { id: "9", nome: "Radiador", preco: "R$ 750,00", estoque: "Sob encomenda" },
  { id: "10", nome: "Farol LED", preco: "R$ 1.200,00", estoque: "Disponível" },
  { id: "11", nome: "Sensor ABS", preco: "R$ 300,00", estoque: "Disponível" },
];

export default function PecasScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.hero, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.kicker, { color: colors.accent }]}>Inventário</Text>
        <Text style={[styles.title, { color: colors.text }]}>Catálogo de peças</Text>
        <Text style={[styles.subtitle, { color: colors.mutedText }]}>Tabela limpa com disponibilidade e valores em destaque.</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={pecas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.cardTop}>
              <Text style={[styles.nome, { color: colors.text }]}>{item.nome}</Text>
              <Text style={[styles.preco, { color: colors.tint }]}>{item.preco}</Text>
            </View>
            <Text style={[styles.estoque, { color: item.estoque === "Disponível" ? colors.success : colors.warning }]}>
              {item.estoque}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 24 },
  hero: {
    borderWidth: 1,
    borderRadius: 28,
    padding: 18,
    marginBottom: 16,
    gap: 8,
  },
  kicker: {
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  title: { fontSize: 30, lineHeight: 34, fontWeight: "800", letterSpacing: -0.5 },
  subtitle: { fontSize: 15, lineHeight: 22 },
  listContent: { gap: 12, paddingBottom: 24 },
  card: {
    padding: 16,
    borderRadius: 22,
    borderWidth: 1,
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  nome: { flex: 1, fontSize: 17, fontWeight: "800" },
  preco: { fontSize: 15, fontWeight: "800" },
  estoque: { fontSize: 13, fontWeight: "700" },
});
