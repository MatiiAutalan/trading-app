import { useEffect, useState } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';
import { useStore } from '@store';
import {
  CustomSnackbar,
  InstrumentItem,
  Loader,
  OrderModal,
} from '@components';
import styles from './SearchScreenStyles';
import { useOrderModal } from '@hooks';

const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { searchResults, loading, error, searchForInstrument } = useStore();

  useEffect(() => {
    const handler = setTimeout(() => {
      searchForInstrument(searchQuery);
    }, 100);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const {
    modalVisible,
    setModalVisible,
    orderInputs,
    handleInstrumentPress,
    handleSubmitOrder,
    snackbarVisible,
    snackbarMessage,
    snackbarColor,
    hideSnackbar,
  } = useOrderModal();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar activos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCapitalize="none"
      />
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.iconError}>🔌</Text>
          <Text style={styles.textError}>{error}</Text>
        </View>
      )}
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <InstrumentItem
              item={item}
              onPress={() => handleInstrumentPress(item.id)}
            />
          )}
          ListEmptyComponent={
            searchQuery.length > 0 && !loading ? (
              <Text style={styles.emptyText}>
                {'No se encontraron resultados'}
              </Text>
            ) : null
          }
        />
      )}

      <OrderModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmitOrder}
        inputs={orderInputs}
        title="Nueva Orden"
        buttonConfirmText="Enviar Orden"
        buttonCancelText="Cancelar"
      />
      <CustomSnackbar
        visible={snackbarVisible}
        message={snackbarMessage}
        onDismiss={hideSnackbar}
        backgroundColor={snackbarColor}
      />
    </View>
  );
};

export default SearchScreen;
