export type CarroCatalogoItem = {
  id: string;
  nome: string;
  subtitulo: string;
  destaque: string;
  motor: string;
  potencia: string;
  transmissao: string;
  categoria: string;
  precoReferencia: string;
  foto: ReturnType<typeof require>;
};

export const carrosCatalogo: CarroCatalogoItem[] = [
  {
    id: '1',
    nome: 'Ford Ranger',
    subtitulo: 'Picape média com foco em trabalho e uso misto',
    destaque: 'Tração 4x4 e robustez de segmento',
    motor: '2.2 Diesel',
    potencia: '160 cv',
    transmissao: 'Automática',
    categoria: 'Picape média',
    precoReferencia: 'a partir de R$ 220 mil',
    foto: require('../../assets/images/fordrangerr.png'),
  },
  {
    id: '2',
    nome: 'Ford Ranger Raptor',
    subtitulo: 'Versão de alto desempenho para off-road pesado',
    destaque: 'Suspensão FOX e acerto esportivo',
    motor: '3.0 V6 Bi-Turbo',
    potencia: '397 cv',
    transmissao: 'Automática de 10 marchas',
    categoria: 'Performance off-road',
    precoReferencia: 'cerca de R$ 499 mil',
    foto: require('../../assets/images/fordrangerraptor.png'),
  },
  {
    id: '3',
    nome: 'Ford Maverick',
    subtitulo: 'Picape intermediária com proposta urbana e versátil',
    destaque: 'Boa eficiência e cabine bem resolvida',
    motor: '2.0 Turbo',
    potencia: '253 cv',
    transmissao: 'Automática',
    categoria: 'Picape intermediária',
    precoReferencia: 'a partir de R$ 190 mil',
    foto: require('../../assets/images/fordmaverick.png'),
  },
  {
    id: '4',
    nome: 'Ford Mustang',
    subtitulo: 'Cupê esportivo clássico com foco em desempenho',
    destaque: 'Ícone da marca com V8 aspirado',
    motor: '5.0 V8',
    potencia: '483 cv',
    transmissao: 'Automática de 10 marchas',
    categoria: 'Esportivo',
    precoReferencia: 'a partir de R$ 520 mil',
    foto: require('../../assets/images/fordmustang.png'),
  },
  {
    id: '5',
    nome: 'Ford Bronco',
    subtitulo: 'SUV off-road com pegada aventureira e retrô',
    destaque: 'Estrutura pensada para trilha e aventura',
    motor: '2.7 V6',
    potencia: '335 cv',
    transmissao: 'Automática',
    categoria: 'SUV off-road',
    precoReferencia: 'cerca de R$ 320 mil',
    foto: require('../../assets/images/fordbronco.png'),
  },
  {
    id: '6',
    nome: 'Ford Territory',
    subtitulo: 'SUV médio voltado para conforto e tecnologia',
    destaque: 'Pacote de assistência e cabine refinada',
    motor: '1.5 Turbo',
    potencia: '169 cv',
    transmissao: 'Automática CVT',
    categoria: 'SUV médio',
    precoReferencia: 'a partir de R$ 220 mil',
    foto: require('../../assets/images/fordterritory.png'),
  },
  {
    id: '7',
    nome: 'Ford Edge',
    subtitulo: 'SUV premium com foco em conforto e rodagem',
    destaque: 'Interior amplo e boa lista de equipamentos',
    motor: '2.0 Turbo',
    potencia: '250 cv',
    transmissao: 'Automática',
    categoria: 'SUV premium',
    precoReferencia: 'faixa de R$ 300 mil',
    foto: require('../../assets/images/fordedge.png'),
  },
  {
    id: '8',
    nome: 'Ford F-150',
    subtitulo: 'Picape full-size com alto porte e capacidade',
    destaque: 'Referência global em utilitário grande',
    motor: 'V8 5.0 / variantes híbridas',
    potencia: 'mais de 400 cv em versões topo',
    transmissao: 'Automática',
    categoria: 'Picape full-size',
    precoReferencia: 'varia por mercado e versão',
    foto: require('../../assets/images/fordf-150.png'),
  },
];

export const carrosData = {
  'Ford Ranger': {
    marca: 'Ford',
    modelo: 'Ranger',
    versao: 'XLS',
    atributos: ['Motor 2.2 Diesel', 'Potência: 160 cv', 'Torque: 385 Nm', 'Tração 4x4', 'Preço aproximado: R$ 220.000'],
    foto: require('../../assets/images/fordrangerr.png'),
  },
  'Ford Ranger Raptor': {
    marca: 'Ford',
    modelo: 'Ranger',
    versao: 'Raptor',
    atributos: [
      'Motor V6 3.0L Bi-Turbo',
      'Potência: 397 cv @ 5650 RPM',
      'Torque: 583 Nm @ 3500 RPM',
      'Transmissão automática de 10 velocidades',
      'Tração 4WD',
      'Amortecedores FOX Racing Live Valve 2.5"',
      'Preço aproximado: R$ 499.000',
    ],
    foto: require('../../assets/images/fordrangerraptor.png'),
  },
  'Ford Maverick': {
    marca: 'Ford',
    modelo: 'Maverick',
    versao: 'Lariat',
    atributos: ['Motor 2.0 Turbo', 'Potência: 253 cv', 'Torque: 380 Nm', 'Consumo médio: 11 km/L', 'Preço aproximado: R$ 190.000'],
    foto: require('../../assets/images/fordmaverick.png'),
  },
  'Ford Mustang': {
    marca: 'Ford',
    modelo: 'Mustang',
    versao: 'GT',
    atributos: ['Motor 5.0 V8', 'Potência: 483 cv', 'Torque: 556 Nm', '0-100 km/h em 4,3s', 'Preço aproximado: R$ 520.000'],
    foto: require('../../assets/images/fordmustang.png'),
  },
  'Ford Bronco': {
    marca: 'Ford',
    modelo: 'Bronco',
    versao: 'Wildtrak',
    atributos: ['Motor 2.7 V6', 'Potência: 335 cv', 'Torque: 563 Nm', 'Design retrô off-road', 'Preço aproximado: R$ 320.000'],
    foto: require('../../assets/images/fordbronco.png'),
  },
};
