import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  selectTrigger: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 48,
  },
  selectedText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    flex: 1,
  },
  dropdownContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: 200,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  scrollContainer: {
    borderRadius: 8,
  },
  scrollContent: {
    paddingVertical: 4,
  },
  optionItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOption: {
    color: '#4A148C',
    fontWeight: '600',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
});

export default styles;
