import { Colors } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: Colors.backgroundWithe,
    width: '100%',
  },
  picker: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    backgroundColor: Colors.backgroundWithe,
    width: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default styles;
