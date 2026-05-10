import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [versao, setVersao] = useState("");
  const [atributos, setAtributos] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    router.push({
      pathname: "/specs",
      params: { marca, modelo, versao, atributos },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Inteligência Competitiva Automotiva</Text>

      <TextInput
        style={styles.input}
        placeholder="Marca"
        placeholderTextColor="#666"
        value={marca}
        onChangeText={setMarca}
      />

      <TextInput
        style={styles.input}
        placeholder="Modelo"
        placeholderTextColor="#666"
        value={modelo}
        onChangeText={setModelo}
      />

      <TextInput
        style={styles.input}
        placeholder="Versão"
        placeholderTextColor="#666"
        value={versao}
        onChangeText={setVersao}
      />

      <TextInput
        style={styles.input}
        placeholder="Atributos técnicos (separados por vírgula)"
        placeholderTextColor="#666"
        value={atributos}
        onChangeText={setAtributos}
      />

      <Button title="Gerar Especificações" onPress={handleSubmit} color="#0078D7" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5", // fundo claro
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000", // texto escuro
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff", // fundo branco nos campos
    color: "#000", // texto escuro nos inputs
  },
});
