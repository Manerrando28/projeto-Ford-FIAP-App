import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Usuário" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <Button title="Entrar" onPress={() => alert("Login realizado!")} />
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000", // texto preto
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    color: "#000",
  },
});
