import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#666666',
    paddingBottom: 4,
  },
  ticker: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  shares: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  details: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#666666',
    flex: 2,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1A1A',
    flex: 1,
    textAlign: 'right',
  },
  percentage: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
    flex: 1,
  },
  profit: {
    color: '#34C759', // Verde para ganancias
  },
  loss: {
    color: '#FF3B30', // Rojo para pérdidas
  },
});
