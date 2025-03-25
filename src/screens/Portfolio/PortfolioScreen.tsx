import { FlatList, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getAssets } from '@services';
import { Asset } from '@types';
import { AssetItem, Loader } from '@components';
import styles from './PortfolioStyles';

/** Screen for portfolio list */
const PortfolioScreen: React.FC = () => {
  const [portfolioList, setPortfolioList] = useState<Asset[]>([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState<boolean>(false);
  useEffect(() => {
    const getPortfolioList = async () => {
      setLoadingPortfolio(true);
      try {
        const data = await getAssets();
        data && setPortfolioList(data);
      } catch (error: any) {
        if (error) {
          console.error(error?.response?.data.error);
          //TODO ADD SCREEN / MESSAGE ERROR
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
      <FlatList
        data={portfolioList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <AssetItem item={item} />}
      />
    </View>
  );
};

export default PortfolioScreen;
