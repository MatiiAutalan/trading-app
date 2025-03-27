import { Colors } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWithe,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  searchInput: {
    height: 48,
    backgroundColor: Colors.backgroundWithe,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 12,
    fontSize: 16,
    color: '#1A1A1A',
  },
  errorText: {
    color: Colors.rejected,
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  loadingText: {
    color: Colors.gray,
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
    fontWeight: '500',
  },
  emptyText: {
    color: Colors.gray,
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;
