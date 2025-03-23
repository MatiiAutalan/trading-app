import { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { getInstruments } from '../../services/instrumentsService';
import { Instrument } from '../../types/instruments';
import InstrumentItem from '../../components/InstrumentItem/InstrumentItem';
import Loader from '../../components/Loader/Loader';
import styles from './InstrumentsStyles';

/** Screen for instrument list */
const InstrumentsScreen: React.FC = () => {
  const [instrumentsList, setInstrumentsList] = useState<Instrument[]>([]);
  const [loadingInstruments, setLoadingInstruments] = useState<boolean>(false);
  useEffect(() => {
    const getInstrumentsList = async () => {
      setLoadingInstruments(true);
      try {
        const data = await getInstruments();
        data && setInstrumentsList(data);
      } catch (error: any) {
        if (error) {
          console.error(error?.response?.data.error);
          //TODO ADD SCREEN / MESSAGE ERROR
        }
      } finally {
        setLoadingInstruments(false);
      }
    };
    getInstrumentsList();
  }, []);

  return loadingInstruments ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <Text style={{ fontSize: 22 }}>{'Listado de activos'}</Text>
      <FlatList
        data={instrumentsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InstrumentItem item={item} />}
      />
    </View>
  );
};

export default InstrumentsScreen;
