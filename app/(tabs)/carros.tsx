import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const carros = [
  { id: "1", nome: "Ford Ranger", detalhes: "Picape média, motor 2.2 Diesel, 4x4", foto: require("../../assets/images/fordrangerr.png") },
  { id: "2", nome: "Ford Ranger Raptor", detalhes: "Versão esportiva, motor 3.0 V6 Bi-Turbo", foto: require("../../assets/images/fordrangerraptor.png") },
  { id: "3", nome: "Ford Maverick", detalhes: "Picape compacta, motor 2.0 Turbo, estilo urbano", foto: require("../../assets/images/fordmaverick.png") },
  { id: "4", nome: "Ford Mustang", detalhes: "Esportivo clássico, motor V8, tração traseira", foto: require("../../assets/images/fordmustang.png") },
  { id: "5", nome: "Ford Bronco", detalhes: "SUV off-road, motor 2.7 V6, design retrô", foto: require("../../assets/images/fordbronco.png") },
  { id: "6", nome: "Ford Territory", detalhes: "SUV médio, motor 1.5 Turbo, foco em conforto", foto: require("../../assets/images/fordterritory.png") },
  { id: "7", nome: "Ford Edge", detalhes: "SUV premium, motor 2.0 Turbo, tecnologia avançada", foto: require("../../assets/images/fordedge.png") },
  { id: "8", nome: "Ford F-150", detalhes: "Picape full-size, motor V8, referência nos EUA", foto: require("../../assets/images/fordf-150.png") },
];

export default function CarrosScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.hero, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.kicker, { color: colors.accent }]}>Catálogo premium</Text>
        <Text style={[styles.title, { color: colors.text }]}>Lista de carros Ford</Text>
        <Text style={[styles.subtitle, { color: colors.mutedText }]}>Selecione um veículo para abrir a ficha com apresentação mais refinada.</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
            onPress={() => router.push({ pathname: "/specs", params: { modelo: item.nome } })}
          >
            <Image source={item.foto} style={styles.image} />
            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <Text style={[styles.text, { color: colors.text }]}>{item.nome}</Text>
                <Text style={[styles.chevron, { color: colors.accent }]}>›</Text>
              </View>
              <Text style={[styles.details, { color: colors.mutedText }]}>{item.detalhes}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 24,
  },
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
  title: {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },
  listContent: {
    gap: 14,
    paddingBottom: 24,
  },
  card: {
    borderWidth: 1,
    borderRadius: 26,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 220,
  },
  cardBody: {
    padding: 16,
    gap: 8,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
  },
  chevron: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "400",
  },
  details: {
    fontSize: 14,
    lineHeight: 21,
  },
});


