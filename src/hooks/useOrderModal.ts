import { useState } from 'react';
import { Alert } from 'react-native';
import { createOrder, OrderData } from '../services/createOrder';
import { InputConfig } from '../components/CustomInput/CustomInput';

const useOrderModal = () => {
  const [selectedInstrumentId, setSelectedInstrumentId] = useState<
    number | null
  >(null);
  const [modalVisible, setModalVisible] = useState(false);

  const orderInputs: InputConfig[] = [
    {
      type: 'select',
      label: 'Tipo de Operación',
      key: 'side',
      options: ['BUY', 'SELL'],
      defaultValue: 'BUY',
    },
    {
      type: 'select',
      label: 'Tipo de Orden',
      key: 'type',
      options: ['MARKET', 'LIMIT'],
      defaultValue: 'MARKET',
    },
    {
      type: 'number',
      label: 'Cantidad',
      key: 'quantity',
      defaultValue: '',
    },
    {
      type: 'number',
      label: 'Precio',
      key: 'price',
      defaultValue: '',
    },
  ];

  const handleInstrumentPress = (instrumentId: number) => {
    setSelectedInstrumentId(instrumentId);
    setModalVisible(true);
  };

  const handleSubmitOrder = async (data: Record<string, any>) => {
    if (!selectedInstrumentId) return;

    const orderData: OrderData = {
      instrument_id: selectedInstrumentId,
      side: data.side as 'BUY' | 'SELL',
      type: data.type as 'MARKET' | 'LIMIT',
      quantity: parseInt(data.quantity, 10),
      ...(data.type === 'LIMIT' && { price: parseFloat(data.price) }),
    };

    try {
      const result = await createOrder(orderData);
      Alert.alert(
        'Orden enviada',
        `ID: ${result.id}\nEstado: ${result.status}`,
      );
    } catch (error) {
      Alert.alert('Error', 'No se pudo enviar la orden. Inténtalo de nuevo.');
    } finally {
      setModalVisible(false);
    }
  };

  return {
    modalVisible,
    setModalVisible,
    orderInputs,
    handleInstrumentPress,
    handleSubmitOrder,
  };
};

export default useOrderModal;
