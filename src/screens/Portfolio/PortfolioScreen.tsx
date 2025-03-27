import { FlatList, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { getAssets } from '@services';
import { Asset } from '@types';
import { AssetItem, Loader } from '@components';
import styles from './PortfolioStyles';

/** Screen for portfolio list */
const PortfolioScreen: React.FC = () => {
  const [portfolioList, setPortfolioList] = useState<Asset[]>([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState<boolean>(false);
  const [errorPortfolio, setErrorPortfolio] = useState<boolean>(false);
  useEffect(() => {
    const getPortfolioList = async () => {
      setLoadingPortfolio(true);
      try {
        const data = await getAssets();
        data && setPortfolioList(data);
      } catch (error: any) {
        if (error) {
          console.error(error?.response?.data.error);
          setErrorPortfolio(true);
        }
      } finally {
        setLoadingPortfolio(false);
      }
    };
    getPortfolioList();
  }, []);

  return loadingPortfolio ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      {errorPortfolio && (
        <View style={styles.errorContainer}>
          <Text style={styles.iconError}>👎🏽</Text>
          <Text style={styles.textError}>
            {'Ocurrio un error al cargar los activos'}
          </Text>
        </View>
      )}
      <FlatList
        data={portfolioList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <AssetItem item={item} />}
      />
    </View>
  );
};

export default PortfolioScreen;
