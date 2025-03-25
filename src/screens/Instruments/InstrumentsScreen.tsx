import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getInstruments } from '@services';
import { Instrument } from '@types';
import { InstrumentItem, OrderModal, Loader } from '@components';
import { useOrderModal } from '@hooks';
import styles from './InstrumentsStyles';

/** Screen for instrument list */
const InstrumentsScreen: React.FC = () => {
  const [instrumentsList, setInstrumentsList] = useState<Instrument[]>([]);
  const [loadingInstruments, setLoadingInstruments] = useState<boolean>(false);

  const {
    modalVisible,
    setModalVisible,
    orderInputs,
    handleInstrumentPress,
    handleSubmitOrder,
  } = useOrderModal();

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
      <Text style={styles.title}>{'Listado de activos'}</Text>
      <FlatList
        data={instrumentsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <InstrumentItem
            item={item}
            onPress={() => handleInstrumentPress(item.id)}
          />
        )}
      />

      <OrderModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmitOrder}
        inputs={orderInputs}
        title="Nueva Orden"
        buttonConfirmText="Enviar Orden"
        buttonCancelText="Cancelar"
      />
    </View>
  );
};

export default InstrumentsScreen;
