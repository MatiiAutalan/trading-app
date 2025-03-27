import { FlatList, View, Text, RefreshControl } from 'react-native';
import { useEffect } from 'react';
import { useStore } from '@store';
import { AssetItem, Loader } from '@components';
import { useRefresh } from '@hooks';
import { Colors } from '@styles';
import styles from './PortfolioStyles';

const PortfolioScreen: React.FC = () => {
  const { portfolio, loading, error, fetchPortfolio } = useStore();
  const { isRefreshing, handleRefresh } = useRefresh(fetchPortfolio);

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
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <AssetItem item={item} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={[Colors.brandDefault]}
            tintColor={Colors.brandDefault}
          />
        }
      />
    </View>
  );
};

export default PortfolioScreen;
