import { FlatList, View, Text } from 'react-native';

const PortfolioScreen = () => {
  const mockData = [
    {
      instrument_id: 6,
      ticker: 'PATA',
      quantity: 100,
      last_price: 47.41,
      close_price: 44.21,
      avg_cost_price: 89.42,
    },
    {
      instrument_id: 8,
      ticker: 'FERR',
      quantity: 14,
      last_price: 66.29,
      close_price: 59.82,
      avg_cost_price: 76.33,
    },
    {
      instrument_id: 19,
      ticker: 'BPAT',
      quantity: 97,
      last_price: 56.64,
      close_price: 51.49,
      avg_cost_price: 94.44,
    },
    {
      instrument_id: 4,
      ticker: 'MOLA',
      quantity: 45,
      last_price: 92.15,
      close_price: 84.13,
      avg_cost_price: 62.6,
    },
    {
      instrument_id: 16,
      ticker: 'GARO',
      quantity: 77,
      last_price: 27.12,
      close_price: 24.44,
      avg_cost_price: 97.67,
    },
    {
      instrument_id: 20,
      ticker: 'RIGO',
      quantity: 77,
      last_price: 93.47,
      close_price: 85.58,
      avg_cost_price: 13.73,
    },
    {
      instrument_id: 6,
      ticker: 'PATA',
      quantity: 54,
      last_price: 47.41,
      close_price: 44.21,
      avg_cost_price: 4.44,
    },
    {
      instrument_id: 18,
      ticker: 'HARG',
      quantity: 44,
      last_price: 78.25,
      close_price: 71.13,
      avg_cost_price: 47.74,
    },
    {
      instrument_id: 13,
      ticker: 'INTR',
      quantity: 22,
      last_price: 84.27,
      close_price: 76.57,
      avg_cost_price: 93.58,
    },
    {
      instrument_id: 6,
      ticker: 'PATA',
      quantity: 76,
      last_price: 47.41,
      close_price: 44.21,
      avg_cost_price: 92.46,
    },
  ];

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.instrument_id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text>{item.ticker}</Text>
            <Text>{item.quantity}</Text>
            <Text>Price: ${item.avg_cost_price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
