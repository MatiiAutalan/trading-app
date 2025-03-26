import { useEffect, useState } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';
import { searchAssets } from '@services';
import { Instrument } from '@types';
import {
  CustomSnackbar,
  InstrumentItem,
  Loader,
  OrderModal,
} from '@components';
import { useOrderModal } from '@hooks';
import styles from './SearchScreenStyles';

/** Search screen instruments */
const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Instrument[]>([]);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (searchQuery.trim().length > 0) {
        try {
          setLoadingSearch(true);
          setSearchError(null);
          const results = await searchAssets(searchQuery.toUpperCase());
          setSearchResults(results);
        } catch (error: any) {
          setSearchError(
            error?.response?.data?.error || 'Error en la búsqueda',
          );
          //TODO ADD SCREEN / MESSAGE ERROR.
          console.error('Search error:', error);
        } finally {
          setLoadingSearch(false);
        }
      } else {
        setSearchResults([]);
      }
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

      {loadingSearch ? (
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
            searchQuery.length > 0 && !loadingSearch ? (
              <Text style={styles.emptyText}>No se encontraron resultados</Text>
            ) : null
          }
        />
      )}
      {searchError && <Text style={styles.errorText}>{searchError}</Text>}

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
