import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function ExploreScreen() {
  const router = useRouter();

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [versao, setVersao] = useState("");
  const [atributos, setAtributos] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
      />
      <TextInput
        style={styles.input}
        placeholder="Versão"
        value={versao}
        onChangeText={setVersao}
      />
      <TextInput
        style={styles.input}
        placeholder="Atributos (separados por vírgula)"
        value={atributos}
        onChangeText={setAtributos}
        multiline
      />

      <Button
        title="Gerar Especificações"
        onPress={() => {
          // Monta a chave exatamente como está no carrosData.ts
          const chave = `${marca.trim()} ${modelo.trim()} ${versao.trim()}`;

          // Redireciona para Specs passando modelo e atributos
          router.push({
            pathname: "/specs",
            params: {
              modelo: chave,
              atributos: atributos,
            },
          });
        }}
        color="#0078D7"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
});
