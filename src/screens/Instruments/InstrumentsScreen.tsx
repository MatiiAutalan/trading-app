import { FlatList, View, Text } from 'react-native';

const InstrumentsScreen = () => {
  const mockData = [
    {
      id: 1,
      ticker: 'DYCA',
      name: 'Dycasa S.A.',
      type: 'ACCIONES',
      last_price: 45.72,
      close_price: 50.07,
    },
    {
      id: 2,
      ticker: 'CAPX',
      name: 'Capex S.A.',
      type: 'ACCIONES',
      last_price: 53.68,
      close_price: 49.71,
    },
    {
      id: 3,
      ticker: 'PGR',
      name: 'Phoenix Global Resources',
      type: 'ACCIONES',
      last_price: 31.95,
      close_price: 28.57,
    },
    {
      id: 4,
      ticker: 'MOLA',
      name: 'Molinos Agro S.A.',
      type: 'ACCIONES',
      last_price: 92.15,
      close_price: 84.13,
    },
    {
      id: 5,
      ticker: 'MIRG',
      name: 'Mirgor',
      type: 'ACCIONES',
      last_price: 40.88,
      close_price: 37.74,
    },
    {
      id: 6,
      ticker: 'PATA',
      name: 'Importadora y Exportadora de la Patagonia',
      type: 'ACCIONES',
      last_price: 47.41,
      close_price: 44.21,
    },
    {
      id: 7,
      ticker: 'TECO2',
      name: 'Telecom',
      type: 'ACCIONES',
      last_price: 76.04,
      close_price: 69.87,
    },
    {
      id: 8,
      ticker: 'FERR',
      name: 'Ferrum S.A.',
      type: 'ACCIONES',
      last_price: 66.29,
      close_price: 59.82,
    },
    {
      id: 9,
      ticker: 'SAMI',
      name: 'S.A San Miguel',
      type: 'ACCIONES',
      last_price: 74.68,
      close_price: 67.31,
    },
    {
      id: 10,
      ticker: 'IRCP',
      name: 'IRSA Propiedades Comerciales S.A.',
      type: 'ACCIONES',
      last_price: 61.45,
      close_price: 55.77,
    },
    {
      id: 11,
      ticker: 'GAMI',
      name: 'Boldt Gaming S.A.',
      type: 'ACCIONES',
      last_price: 97.56,
      close_price: 88.31,
    },
    {
      id: 12,
      ticker: 'DOME',
      name: 'Domec',
      type: 'ACCIONES',
      last_price: 38.89,
      close_price: 35.36,
    },
    {
      id: 13,
      ticker: 'INTR',
      name: 'Compañía Introductora de Buenos Aires S.A.',
      type: 'ACCIONES',
      last_price: 84.27,
      close_price: 76.57,
    },
    {
      id: 14,
      ticker: 'MTR',
      name: 'Matba Rofex S.A.',
      type: 'ACCIONES',
      last_price: 65.23,
      close_price: 59.3,
    },
    {
      id: 15,
      ticker: 'FIPL',
      name: 'Fiplasto',
      type: 'ACCIONES',
      last_price: 85.96,
      close_price: 78.15,
    },
    {
      id: 16,
      ticker: 'GARO',
      name: 'Garovaglio Y Zorraquín',
      type: 'ACCIONES',
      last_price: 27.12,
      close_price: 24.44,
    },
    {
      id: 17,
      ticker: 'SEMI',
      name: 'Molinos Juan Semino',
      type: 'ACCIONES',
      last_price: 59.99,
      close_price: 54.54,
    },
    {
      id: 18,
      ticker: 'HARG',
      name: 'Holcim (Argentina) S.A.',
      type: 'ACCIONES',
      last_price: 78.25,
      close_price: 71.13,
    },
    {
      id: 19,
      ticker: 'BPAT',
      name: 'Banco Patagonia',
      type: 'ACCIONES',
      last_price: 56.64,
      close_price: 51.49,
    },
    {
      id: 20,
      ticker: 'RIGO',
      name: 'Rigolleau S.A.',
      type: 'ACCIONES',
      last_price: 93.47,
      close_price: 85.58,
    },
    {
      id: 21,
      ticker: 'CVH',
      name: 'Cablevision Holding',
      type: 'ACCIONES',
      last_price: 36.22,
      close_price: 32.84,
    },
    {
      id: 22,
      ticker: 'BBAR',
      name: 'Banco Frances',
      type: 'ACCIONES',
      last_price: 79.36,
      close_price: 71.67,
    },
    {
      id: 23,
      ticker: 'LEDE',
      name: 'Ledesma',
      type: 'ACCIONES',
      last_price: 41.61,
      close_price: 37.79,
    },
    {
      id: 24,
      ticker: 'CELU',
      name: 'Celulosa Argentina S.A.',
      type: 'ACCIONES',
      last_price: 72.51,
      close_price: 65.25,
    },
    {
      id: 25,
      ticker: 'CECO2',
      name: 'Central Costanera',
      type: 'ACCIONES',
      last_price: 66.51,
      close_price: 65.25,
    },
    {
      id: 26,
      ticker: 'ARS',
      name: 'Pesos',
      type: 'MONEDA',
      last_price: 1,
      close_price: 1,
    },
  ];

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text>{item.ticker}</Text>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>Price: ${item.last_price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default InstrumentsScreen;
