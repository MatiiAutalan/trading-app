import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  searchInput: {
    height: 48,
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 12,
    fontSize: 16,
    color: '#1A1A1A',
  },
  errorText: {
    color: '#D32F2F',
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  loadingText: {
    color: '#757575',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
    fontWeight: '500',
  },
  emptyText: {
    color: '#757575',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;
