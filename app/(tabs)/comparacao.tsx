import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useResponsiveLayout } from "@/hooks/use-responsive";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { carrosCatalogo, type CarroCatalogoItem } from "./carrosData";

type ComparisonKey =
  | "power"
  | "use"
  | "space"
  | "identity"
  | "technology"
  | "price";

type ComparisonProfile = {
  slogan: string;
  uniqueStrength: string;
  bestFor: string;
  uniquePoints: string[];
  keyFacts: Record<ComparisonKey, string>;
  verdict: string;
};

const comparisonProfiles: Record<string, ComparisonProfile> = {
  "Ford Ranger": {
    slogan: "A picape versátil da linha",
    uniqueStrength: "Equilibra robustez, tração 4x4 e uso diário.",
    bestFor: "Quem precisa de trabalho, estrada e presença sem exagero.",
    uniquePoints: [
      "Tração 4x4 para piso ruim e uso misto.",
      "Acerto de suspensão pensado para carga e rodagem longa.",
      "Perfil forte para quem quer uma Ford pronta para quase tudo.",
    ],
    keyFacts: {
      power: "160 cv",
      use: "Trabalho + uso misto",
      space: "Cabine prática e caçamba funcional",
      identity: "Força e confiabilidade",
      technology: "Pacote equilibrado para rotina e estrada",
      price: "Entrada mais acessível da gama comparada",
    },
    verdict: "Boa escolha quando a prioridade é versatilidade com cara de ferramenta premium.",
  },
  "Ford Ranger Raptor": {
    slogan: "A Ranger feita para atacar o terreno",
    uniqueStrength: "É a leitura mais radical da picape média Ford.",
    bestFor: "Quem quer desempenho off-road acima da média e visual imponente.",
    uniquePoints: [
      "Suspensão FOX de alto nível para trilha e velocidade em terreno irregular.",
      "Motor V6 bi-turbo com resposta muito mais agressiva.",
      "Acerto visual e dinâmico que a coloca num patamar próprio.",
    ],
    keyFacts: {
      power: "397 cv",
      use: "Off-road pesado e alta performance",
      space: "Mesma base da Ranger com pegada esportiva",
      identity: "Performance e aventura extrema",
      technology: "Conjunto avançado de controle e suspensão",
      price: "Topo da gama da picape média",
    },
    verdict: "A melhor opção da Ford para quem quer emoção fora de estrada.",
  },
  "Ford Maverick": {
    slogan: "A picape urbana com postura inteligente",
    uniqueStrength: "Entrega praticidade com eficiência e porte mais amigável.",
    bestFor: "Quem quer uma picape para cidade, lazer e uso familiar.",
    uniquePoints: [
      "Tamanho mais fácil para manobra e rotina urbana.",
      "Proposta de conforto e eficiência acima da média no segmento.",
      "Perfil muito forte para quem não quer uma picape grande demais.",
    ],
    keyFacts: {
      power: "253 cv",
      use: "Cidade e lazer",
      space: "Cabine bem resolvida para família",
      identity: "Praticidade com estilo",
      technology: "Conjunto moderno e amigável",
      price: "Posicionamento intermediário",
    },
    verdict: "A mais racional para quem quer a experiência Ford em formato compacto.",
  },
  "Ford Mustang": {
    slogan: "O ícone esportivo da Ford",
    uniqueStrength: "É a assinatura emocional da marca em forma de cupê.",
    bestFor: "Quem prioriza prazer ao volante, som e presença visual.",
    uniquePoints: [
      "Motor V8 aspirado com personalidade que entrega muita identidade.",
      "Design de cupê com impacto imediato nas ruas.",
      "A proposta mais apaixonante e menos racional da linha.",
    ],
    keyFacts: {
      power: "483 cv",
      use: "Performance e experiência emocional",
      space: "Cupê esportivo 2+2",
      identity: "Ícone global de performance",
      technology: "Pacote de condução e acerto esportivo",
      price: "Aposta premium e aspiracional",
    },
    verdict: "A escolha certa quando a Ford precisa ser emoção pura.",
  },
  "Ford Bronco": {
    slogan: "O SUV com alma de trilha",
    uniqueStrength: "Une visual retrô, capacidade off-road e postura diferenciada.",
    bestFor: "Quem quer aventura e identidade forte no mesmo pacote.",
    uniquePoints: [
      "Capacidade fora de estrada acima do SUV urbano comum.",
      "Estilo marcante que entrega personalidade instantânea.",
      "É uma alternativa mais aventureira e exclusiva na garagem.",
    ],
    keyFacts: {
      power: "335 cv",
      use: "Aventura e trilha",
      space: "SUV robusto com boa posição de dirigir",
      identity: "Retrô + off-road",
      technology: "Recursos voltados à condução em terreno difícil",
      price: "SUV de proposta aspiracional",
    },
    verdict: "Perfeito para quem quer sair do óbvio sem perder utilidade.",
  },
  "Ford Territory": {
    slogan: "O SUV equilibrado para uso diário",
    uniqueStrength: "Foca em conforto, tecnologia e rodagem refinada.",
    bestFor: "Quem prioriza conforto familiar e pacote tecnológico.",
    uniquePoints: [
      "Cabine confortável e proposta mais urbana.",
      "Conjunto muito bom para rotina, família e viagens.",
      "Faz o papel de SUV racional com acabamento superior.",
    ],
    keyFacts: {
      power: "169 cv",
      use: "Família e cidade",
      space: "SUV médio bem aproveitado",
      identity: "Conforto e tecnologia",
      technology: "Pacote de assistência e conectividade",
      price: "SUV de entrada premium",
    },
    verdict: "O mais suave da gama para uso diário e familiar.",
  },
  "Ford Edge": {
    slogan: "O SUV premium de rodagem confortável",
    uniqueStrength: "Entregra espaço, silêncio de cabine e sensação mais refinada.",
    bestFor: "Quem quer um Ford grande com foco em conforto e status.",
    uniquePoints: [
      "Interior amplo e acabamento acima da média.",
      "Boa escolha para quem valoriza viagem tranquila.",
      "Equilibra luxo, porte e desempenho com maturidade.",
    ],
    keyFacts: {
      power: "250 cv",
      use: "Conforto premium",
      space: "SUV grande e confortável",
      identity: "Elegância e presença",
      technology: "Conjunto de conveniência e assistência",
      price: "Faixa premium consolidada",
    },
    verdict: "A melhor resposta quando o foco é conforto sem abrir mão de presença.",
  },
  "Ford F-150": {
    slogan: "A full-size que define escala",
    uniqueStrength: "É a Ford em sua forma mais imponente e capaz.",
    bestFor: "Quem precisa de capacidade, porte e versatilidade máxima.",
    uniquePoints: [
      "Caçamba, porte e capacidade em padrão americano.",
      "Feita para trabalho pesado e presença de alto impacto.",
      "É a referência quando tamanho e força importam mais.",
    ],
    keyFacts: {
      power: "+400 cv em versões topo",
      use: "Trabalho pesado e uso grande",
      space: "Cabine e caçamba de full-size",
      identity: "Máxima robustez",
      technology: "Conjunto avançado para uso intenso",
      price: "Topo da escala Ford utilitária",
    },
    verdict: "A opção para quem quer a Ford sem compromissos de porte.",
  },
};

const modelOrder = carrosCatalogo.map((item) => item.nome);

const comparisonRows: Array<{ label: string; key: ComparisonKey; helper: string }> = [
  { label: "Potência", key: "power", helper: "Força disponível e proposta mecânica" },
  { label: "Uso ideal", key: "use", helper: "Onde o carro mais faz sentido" },
  { label: "Espaço e formato", key: "space", helper: "Cabine, porte e aproveitamento" },
  { label: "Identidade", key: "identity", helper: "O que esse Ford comunica" },
  { label: "Tecnologia", key: "technology", helper: "Nível de pacote e assistência" },
  { label: "Posicionamento", key: "price", helper: "Faixa e papel na linha" },
];

function getProfile(modelName: string): ComparisonProfile {
  return comparisonProfiles[modelName] ?? comparisonProfiles[modelOrder[0]];
}

function getCar(modelName: string): CarroCatalogoItem {
  return carrosCatalogo.find((item) => item.nome === modelName) ?? carrosCatalogo[0];
}

export default function ComparacaoScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];
  const { pagePadding, contentMaxWidth, titleSize, bodyTextSize, isCompact } = useResponsiveLayout();

  const [leftModel, setLeftModel] = useState(modelOrder[0]);
  const [rightModel, setRightModel] = useState(modelOrder[3] ?? modelOrder[1]);
  const [openSelector, setOpenSelector] = useState<"left" | "right" | null>(null);

  const leftCar = getCar(leftModel);
  const rightCar = getCar(rightModel);
  const leftProfile = getProfile(leftModel);
  const rightProfile = getProfile(rightModel);

  const summary = useMemo(() => {
    const leftCategory = leftCar.categoria.toLowerCase();
    const rightCategory = rightCar.categoria.toLowerCase();

    if (leftCategory === rightCategory) {
      return `Os dois estão no mesmo universo: ${leftCar.categoria}. A comparação aqui destaca a proposta mais forte de cada um.`;
    }

    return `${leftCar.nome} representa ${leftCar.categoria.toLowerCase()}, enquanto ${rightCar.nome} puxa para ${rightCar.categoria.toLowerCase()}. São propostas diferentes dentro da Ford.`;
  }, [leftCar, rightCar]);

  const uniqueLeft = leftProfile.uniquePoints;
  const uniqueRight = rightProfile.uniquePoints;

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background, padding: pagePadding }]}>
      <View style={[styles.shell, { maxWidth: contentMaxWidth }]}>
        <View style={[styles.hero, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.kicker, { color: colors.accent }]}>Comparação Ford</Text>
          <Text style={[styles.title, { color: colors.text, fontSize: titleSize }]}>Dois Ford lado a lado, com clareza de uso e personalidade</Text>
          <Text style={[styles.subtitle, { color: colors.mutedText, fontSize: bodyTextSize }]}>{summary}</Text>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Escolha os modelos</Text>
              <Text style={[styles.sectionSubtitle, { color: colors.mutedText }]}>Compare qualquer combinação da linha Ford.</Text>
            </View>
          </View>

          <View style={[styles.pickerGrid, isCompact && styles.pickerGridStack]}>
            <ModelSelector
              label="Modelo 1"
              value={leftModel}
              onChange={setLeftModel}
              options={modelOrder}
              colors={colors}
              isOpen={openSelector === "left"}
              onToggle={() => setOpenSelector((current) => (current === "left" ? null : "left"))}
              onClose={() => setOpenSelector(null)}
            />
            <ModelSelector
              label="Modelo 2"
              value={rightModel}
              onChange={setRightModel}
              options={modelOrder}
              colors={colors}
              isOpen={openSelector === "right"}
              onToggle={() => setOpenSelector((current) => (current === "right" ? null : "right"))}
              onClose={() => setOpenSelector(null)}
            />
          </View>
        </View>

        <View style={[styles.dualCards, isCompact && styles.dualCardsStack]}>
          <VehicleSummaryCard car={leftCar} profile={leftProfile} colors={colors} accentLabel="Modelo 1" isCompact={isCompact} />
          <VehicleSummaryCard car={rightCar} profile={rightProfile} colors={colors} accentLabel="Modelo 2" isCompact={isCompact} />
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Diferenças principais</Text>
          <Text style={[styles.sectionSubtitle, { color: colors.mutedText }]}>Linha a linha para deixar a comparação objetiva.</Text>

          <View style={styles.table}>
            {comparisonRows.map((row) => (
              <View key={row.key} style={[styles.tableRow, { borderBottomColor: colors.border }]}>
                <View style={styles.tableLabelWrap}>
                  <Text style={[styles.tableLabel, { color: colors.text }]}>{row.label}</Text>
                  <Text style={[styles.tableHelper, { color: colors.mutedText }]}>{row.helper}</Text>
                </View>
                <View style={styles.tableValues}>
                  <View style={[styles.tableValueCard, { backgroundColor: colors.surfaceMuted }]}>
                    <Text style={[styles.tableValueTitle, { color: colors.accent }]}>Modelo 1</Text>
                    <Text style={[styles.tableValueText, { color: colors.text }]}>{leftProfile.keyFacts[row.key]}</Text>
                  </View>
                  <View style={[styles.tableValueCard, { backgroundColor: colors.surfaceMuted }]}>
                    <Text style={[styles.tableValueTitle, { color: colors.accent }]}>Modelo 2</Text>
                    <Text style={[styles.tableValueText, { color: colors.text }]}>{rightProfile.keyFacts[row.key]}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>O que torna cada um único</Text>
          <View style={[styles.uniqueGrid, isCompact && styles.uniqueGridStack]}>
            <UniqueBlock title={leftCar.nome} subtitle={leftProfile.slogan} items={uniqueLeft} colors={colors} />
            <UniqueBlock title={rightCar.nome} subtitle={rightProfile.slogan} items={uniqueRight} colors={colors} />
          </View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Leitura final</Text>
          <View style={[styles.verdictBox, { backgroundColor: colors.surfaceMuted }]}>
            <Text style={[styles.verdictTitle, { color: colors.text }]}>{leftCar.nome}</Text>
            <Text style={[styles.verdictText, { color: colors.mutedText }]}>{leftProfile.verdict}</Text>
          </View>
          <View style={[styles.verdictBox, { backgroundColor: colors.surfaceMuted }]}>
            <Text style={[styles.verdictTitle, { color: colors.text }]}>{rightCar.nome}</Text>
            <Text style={[styles.verdictText, { color: colors.mutedText }]}>{rightProfile.verdict}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function ModelSelector({
  label,
  value,
  onChange,
  options,
  colors,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  colors: (typeof Colors)["light"];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <View style={[styles.selectorCard, { backgroundColor: colors.surfaceMuted }]}>
      <Text style={[styles.selectorLabel, { color: colors.mutedText }]}>{label}</Text>
      <Pressable
        onPress={onToggle}
        style={({ pressed }) => [
          styles.selectorBox,
          {
            backgroundColor: colors.surface,
            borderColor: isOpen ? colors.tint : colors.border,
            opacity: pressed ? 0.96 : 1,
          },
        ]}
      >
        <View style={styles.selectorBoxRow}>
          <Text style={[styles.selectorValue, { color: colors.text }]} numberOfLines={1}>
            {value}
          </Text>
          <Text style={[styles.selectorChevron, { color: colors.accent }]}>{isOpen ? "▴" : "▾"}</Text>
        </View>
      </Pressable>

      {isOpen ? (
        <View style={[styles.selectorList, { backgroundColor: colors.surface }]}> 
          <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={styles.selectorListScroll} contentContainerStyle={styles.selectorListContent}>
            {options.map((option) => {
              const active = option === value;

              return (
                <Pressable
                  key={option}
                  onPress={() => {
                    onChange(option);
                    onClose();
                  }}
                  style={({ pressed }) => [
                    styles.selectorOption,
                    {
                      backgroundColor: active ? colors.tint : colors.surfaceMuted,
                      borderColor: active ? colors.tint : colors.border,
                      opacity: pressed ? 0.94 : 1,
                    },
                  ]}
                >
                  <Text style={[styles.selectorOptionText, { color: active ? '#fff' : colors.text }]}>{option}</Text>
                  {active ? <Text style={styles.selectorOptionMark}>Selecionado</Text> : null}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
}

function VehicleSummaryCard({
  car,
  profile,
  colors,
  accentLabel,
  isCompact,
}: {
  car: CarroCatalogoItem;
  profile: ComparisonProfile;
  colors: (typeof Colors)["light"];
  accentLabel: string;
  isCompact: boolean;
}) {
  return (
    <View style={[styles.vehicleCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Text style={[styles.vehicleAccent, { color: colors.accent }]}>{accentLabel}</Text>
      <Text style={[styles.vehicleName, { color: colors.text }]}>{car.nome}</Text>
      <Text style={[styles.vehicleSlogan, { color: colors.mutedText }]}>{profile.slogan}</Text>

      <View style={[styles.vehicleMetrics, isCompact && styles.vehicleMetricsStack]}>
        <Metric label="Motor" value={car.motor} colors={colors} isCompact={isCompact} />
        <Metric label="Potência" value={car.potencia} colors={colors} isCompact={isCompact} />
        <Metric label="Transmissão" value={car.transmissao} colors={colors} isCompact={isCompact} />
        <Metric label="Categoria" value={car.categoria} colors={colors} isCompact={isCompact} />
      </View>

      <View style={[styles.highlightCard, { backgroundColor: colors.surfaceMuted }]}>
        <Text style={[styles.highlightLabel, { color: colors.accent }]}>Ponto único</Text>
        <Text style={[styles.highlightText, { color: colors.text }]}>{profile.uniqueStrength}</Text>
      </View>

      <Text style={[styles.vehicleFooter, { color: colors.mutedText }]}>{profile.bestFor}</Text>
    </View>
  );
}

function UniqueBlock({
  title,
  subtitle,
  items,
  colors,
}: {
  title: string;
  subtitle: string;
  items: string[];
  colors: (typeof Colors)["light"];
}) {
  return (
    <View style={[styles.uniqueCard, { backgroundColor: colors.surfaceMuted }]}>
      <Text style={[styles.uniqueTitle, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.uniqueSubtitle, { color: colors.accent }]}>{subtitle}</Text>
      <View style={styles.uniqueList}>
        {items.map((item) => (
          <View key={item} style={styles.uniqueRow}>
            <View style={[styles.uniqueDot, { backgroundColor: colors.tint }]} />
            <Text style={[styles.uniqueText, { color: colors.text }]}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function Metric({
  label,
  value,
  colors,
  isCompact,
}: {
  label: string;
  value: string;
  colors: (typeof Colors)["light"];
  isCompact: boolean;
}) {
  return (
    <View style={[styles.metricBox, isCompact && styles.metricBoxCompact, { backgroundColor: colors.surfaceMuted }]}>
      <Text style={[styles.metricLabel, { color: colors.mutedText }]} numberOfLines={1}>
        {label}
      </Text>
      <Text style={[styles.metricValue, { color: colors.text }]} numberOfLines={2}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 24,
    paddingBottom: 36,
  },
  shell: {
    width: "100%",
    gap: 16,
  },
  hero: {
    borderWidth: 1,
    borderRadius: 28,
    padding: 18,
    gap: 8,
  },
  title: {
    lineHeight: 34,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },
  sectionCard: {
    borderWidth: 1,
    borderRadius: 28,
    padding: 18,
    gap: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  sectionSubtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  pickerGrid: {
    flexDirection: "row",
    gap: 10,
  },
  pickerGridStack: {
    flexDirection: "column",
  },
  selectorCard: {
    flex: 1,
    borderRadius: 22,
    padding: 14,
    gap: 10,
  },
  selectorLabel: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  selectorBox: {
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  selectorBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  selectorValue: {
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
  },
  selectorChevron: {
    fontSize: 18,
    fontWeight: "800",
  },
  selectorList: {
    borderWidth: 1,
    borderRadius: 18,
    overflow: "hidden",
  },
  selectorListScroll: {
    maxHeight: 220,
  },
  selectorListContent: {
    padding: 8,
    gap: 8,
  },
  selectorOption: {
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 2,
  },
  selectorOptionText: {
    fontSize: 14,
    fontWeight: "800",
  },
  selectorOptionMark: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
  dualCards: {
    flexDirection: "row",
    gap: 10,
  },
  dualCardsStack: {
    flexDirection: "column",
  },
  vehicleCard: {
    flex: 1,
    borderRadius: 28,
    borderWidth: 1,
    padding: 18,
    gap: 10,
  },
  vehicleAccent: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  vehicleName: {
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  vehicleSlogan: {
    fontSize: 14,
    lineHeight: 20,
  },
  vehicleMetrics: {
    flexDirection: "column",
    gap: 8,
  },
  vehicleMetricsStack: {
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  metricBox: {
    width: "100%",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 2,
  },
  metricBoxCompact: {
    width: "100%",
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.4,
    lineHeight: 14,
  },
  metricValue: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "800",
  },
  highlightCard: {
    borderRadius: 20,
    padding: 14,
    gap: 6,
  },
  highlightLabel: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  highlightText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
  },
  vehicleFooter: {
    fontSize: 13,
    lineHeight: 20,
  },
  table: {
    gap: 10,
  },
  tableRow: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    gap: 10,
  },
  tableLabelWrap: {
    gap: 2,
  },
  tableLabel: {
    fontSize: 15,
    fontWeight: "800",
  },
  tableHelper: {
    fontSize: 12,
    lineHeight: 18,
  },
  tableValues: {
    flexDirection: "row",
    gap: 8,
  },
  tableValueCard: {
    flex: 1,
    borderRadius: 18,
    padding: 12,
    gap: 4,
  },
  tableValueTitle: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  tableValueText: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "700",
  },
  uniqueGrid: {
    flexDirection: "row",
    gap: 10,
  },
  uniqueGridStack: {
    flexDirection: "column",
  },
  uniqueCard: {
    flex: 1,
    borderRadius: 22,
    padding: 16,
    gap: 8,
  },
  uniqueTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  uniqueSubtitle: {
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  uniqueList: {
    gap: 8,
  },
  uniqueRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  uniqueDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  uniqueText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
  },
  verdictBox: {
    borderRadius: 20,
    padding: 14,
    gap: 4,
  },
  verdictTitle: {
    fontSize: 14,
    fontWeight: "800",
  },
  verdictText: {
    fontSize: 13,
    lineHeight: 19,
  },
});