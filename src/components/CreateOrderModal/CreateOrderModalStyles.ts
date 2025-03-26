import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#4A148C',
    padding: 12,
    marginRight: 8,
    alignItems: 'center',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#4A148C',
    borderRadius: 8,
    padding: 12,
    marginLeft: 8,
    alignItems: 'center',
  },
  buttonCancelText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A148C',
  },
  buttonConfirmText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
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
