import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { carrosData } from "./carrosData";

export default function DetalhesScreen() {
  const { nome } = useLocalSearchParams();
  const dados = carrosData[nome as keyof typeof carrosData];

  if (!dados) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carro não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dados.marca} {dados.modelo} {dados.versao}</Text>
      {dados.atributos.map((attr, index) => (
        <Text key={index} style={styles.text}>{attr}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff", // <- fundo branco
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000", // texto preto
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    color: "#333", // texto cinza escuro
  },
});
