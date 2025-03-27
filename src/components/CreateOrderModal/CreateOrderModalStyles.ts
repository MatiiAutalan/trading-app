import { Colors } from '@styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.backdrop,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colors.backgroundWithe,
    borderRadius: 12,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Colors.backgroundWithe,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.brandDefault,
    padding: 12,
    marginRight: 8,
    alignItems: 'center',
  },
  submitButton: {
    flex: 1,
    backgroundColor: Colors.brandDefault,
    borderRadius: 8,
    padding: 12,
    marginLeft: 8,
    alignItems: 'center',
  },
  buttonCancelText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.brandDefault,
  },
  buttonConfirmText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.backgroundWithe,
  },
  inputWrapper: {
    marginBottom: 10,
    position: 'relative',
  },
  errorText: {
    position: 'absolute',
    bottom: -4,
    left: 0,
    right: 0,
    color: 'red',
    fontSize: 12,
  },
});

export default styles;
