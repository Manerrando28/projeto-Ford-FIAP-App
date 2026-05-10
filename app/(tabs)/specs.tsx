import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { carrosData } from "./carrosData";

export default function SpecsScreen() {
  const router = useRouter();
  const { modelo } = useLocalSearchParams<{ modelo?: string }>();

  // Busca os dados do carro pelo modelo
  const dados = modelo ? carrosData[modelo as keyof typeof carrosData] : null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Especificações Técnicas</Text>

      {dados ? (
        <>
          <Text style={styles.item}>Marca: {dados.marca}</Text>
          <Text style={styles.item}>Modelo: {dados.modelo}</Text>
          <Text style={styles.item}>Versão: {dados.versao}</Text>

          <Text style={styles.subtitle}>Atributos:</Text>
          {dados.atributos.map((attr: string, index: number) => (
            <Text key={index} style={styles.item}>• {attr}</Text>
          ))}
        </>
      ) : (
        <Text style={styles.item}>Nenhum dado encontrado</Text>
      )}

      <View style={{ marginTop: 20 }}>
        <Button
          title="Voltar para Carros"
          onPress={() => router.push("/carros")}
          color="#0078D7"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  subtitle: { fontSize: 18, marginTop: 15, marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5 },
});
