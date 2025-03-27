import { FlatList, View, Text } from 'react-native';
import { useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { AssetItem, Loader } from '@components';
import styles from './PortfolioStyles';

const PortfolioScreen: React.FC = () => {
  const { portfolio, loading, error, fetchPortfolio } = useStore();

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.iconError}>👎🏽</Text>
          <Text style={styles.textError}>{error}</Text>
        </View>
      )}
      <FlatList
        data={portfolio}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <AssetItem item={item} />}
      />
    </View>
  );
};

export default PortfolioScreen;
