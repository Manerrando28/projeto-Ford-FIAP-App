import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Carros Ford</Text>
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: "/specs", params: { modelo: item.nome } })}
          >
            {/* Foto do carro */}
            <Image source={item.foto} style={styles.image} />

            {/* Nome do carro */}
            <Text style={styles.text}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: { marginBottom: 20, backgroundColor: "#f9f9f9", padding: 10, borderRadius: 8 },
  image: { width: "100%", height: 200, borderRadius: 8 },
  text: { fontSize: 18, marginTop: 10, fontWeight: "bold" },
});


