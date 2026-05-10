import { View, Text, FlatList, StyleSheet } from "react-native";

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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Peças</Text>
      <FlatList
        data={pecas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <Text style={[styles.estoque, item.estoque === "Disponível" ? styles.disponivel : styles.sobEncomenda]}>
              {item.estoque}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f6f9" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#333" },
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nome: { fontSize: 18, fontWeight: "bold", color: "#222", marginBottom: 5 },
  preco: { fontSize: 16, color: "#0078D7", marginBottom: 5 },
  estoque: { fontSize: 14, fontWeight: "600" },
  disponivel: { color: "green" },
  sobEncomenda: { color: "orange" },
});
