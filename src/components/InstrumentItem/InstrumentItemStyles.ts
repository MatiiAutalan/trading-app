import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leftColumn: {
    flex: 1,
    marginRight: 16,
  },
  rightColumn: {
    alignItems: 'flex-end',
  },
  ticker: {
    fontSize: 14,
    color: '#666666',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  returnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceChange: {
    fontSize: 14,
    fontWeight: '500',
  },
  returnPercentage: {
    fontSize: 14,
    fontWeight: '500',
  },
  profit: {
    color: '#34C759',
  },
  loss: {
    color: '#FF3B30',
  },
  performanceBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default styles;
