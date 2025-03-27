import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useStore } from '../../store/useStore';
import {
  InstrumentItem,
  OrderModal,
  Loader,
  CustomSnackbar,
} from '@components';
import { useOrderModal } from '@hooks';
import styles from './InstrumentsStyles';

const InstrumentsScreen: React.FC = () => {
  const { instruments, loading, error, fetchInstruments } = useStore();
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

  useEffect(() => {
    fetchInstruments();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{'Listado de activos'}</Text>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.iconError}>🔌</Text>
          <Text style={styles.textError}>{error}</Text>
        </View>
      )}
      <FlatList
        data={instruments}
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
      <CustomSnackbar
        visible={snackbarVisible}
        message={snackbarMessage}
        onDismiss={hideSnackbar}
        backgroundColor={snackbarColor}
      />
    </View>
  );
};

export default InstrumentsScreen;
