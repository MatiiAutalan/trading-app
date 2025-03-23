import { FlatList, View } from 'react-native';
import { getAssets } from '../../services/portfolioService';
import { useEffect, useState } from 'react';
import { Asset } from '../../types/assets';
import AssetsItem from '../../components/AssetItem/AssetItem';
import styles from './PortfolioStyles';
import Loader from '../../components/Loader/Loader';

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
        renderItem={({ item }) => <AssetsItem item={item} />}
      />
    </View>
  );
};

export default PortfolioScreen;
