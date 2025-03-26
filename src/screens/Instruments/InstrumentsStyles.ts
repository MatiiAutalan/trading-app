import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  title: {
    fontSize: 22,
  },

  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  iconError: { fontSize: 60 },
  textError: { fontSize: 24, textAlign: 'center', fontWeight: 'bold' },
});

export default styles;
