import { useEffect, useState } from 'react';
import { FlatList, View, Text, TextInput } from 'react-native';
import { searchAssets } from '../../services/searchAssets';
import { Instrument } from '../../types/instruments';

import styles from './SearchScreenStyles';
import InstrumentItem from '../../components/InstrumentItem/InstrumentItem';
import Loader from '../../components/Loader/Loader';

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
            <InstrumentItem item={item} disabled={true} />
          )}
          ListEmptyComponent={
            searchQuery.length > 0 && !loadingSearch ? (
              <Text style={styles.emptyText}>No se encontraron resultados</Text>
            ) : null
          }
        />
      )}

      {searchError && <Text style={styles.errorText}>{searchError}</Text>}
    </View>
  );
};

export default SearchScreen;
