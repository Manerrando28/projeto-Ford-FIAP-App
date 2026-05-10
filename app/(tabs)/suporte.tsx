import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function SuporteScreen() {
  const [descricao, setDescricao] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suporte ao Cliente</Text>

      {/* Informações de contato */}
      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Entre em contato:</Text>
        <Text style={styles.contactText}>📞 Telefone: (11) 4002-8922</Text>
        <Text style={styles.contactText}>✉️ Email: suporte@fordfiap.com</Text>
      </View>

      {/* Campo de descrição */}
      <TextInput
        style={styles.input}
        placeholder="Descreva seu problema"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      {/* Botão */}
      <Button
        title="Abrir chamado"
        onPress={() => alert(`Chamado aberto: ${descricao}`)}
        color="#0078D7"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  contactCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0078D7",
  },
  contactText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#000",
    minHeight: 100,
    textAlignVertical: "top",
  },
});
