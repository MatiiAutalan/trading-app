import { useState } from 'react';
import { createOrder, OrderData } from '@services';
import { InputConfig } from '@components';
import { Colors } from '@styles';

const useOrderModal = () => {
  const [selectedInstrumentId, setSelectedInstrumentId] = useState<
    number | null
  >(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarColor, setSnackbarColor] = useState('#333');

  const showSnackbar = (message: string, color: string) => {
    setSnackbarMessage(message);
    setSnackbarColor(color);
    setSnackbarVisible(true);
  };

  const hideSnackbar = () => setSnackbarVisible(false);

  const orderInputs: InputConfig[] = [
    {
      type: 'select',
      label: 'Tipo de Operación',
      key: 'side',
      options: [
        { key: 'BUY', name: 'Compra' },
        { key: 'SELL', name: 'Venta' },
      ],
      defaultValue: '',
    },
    {
      type: 'select',
      label: 'Tipo de Orden',
      key: 'type',
      options: [
        { key: 'MARKET', name: 'Mercado' },
        { key: 'LIMIT', name: 'Limitada' },
      ],
      defaultValue: '',
    },
    {
      type: 'number',
      label: 'Cantidad de acciones',
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
      ...(data.price && { price: parseFloat(data.price.replace(',', '.')) }),
    };

    try {
      const result = await createOrder(orderData);
      switch (result.status) {
        case 'FILLED':
          showSnackbar(`Orden completada - ID: ${result.id}`, Colors.success);
          break;
        case 'REJECTED':
          showSnackbar(`Orden rechazada - ID: ${result.id}`, Colors.rejected);
          break;
        case 'PENDING':
          showSnackbar(`Orden pendiente - ID: ${result.id}`, Colors.pending);
          break;
        default:
          showSnackbar(`Orden enviada - ID: ${result.id}`, Colors.blackLight);
          break;
      }
    } catch (error) {
      showSnackbar('Error: No se pudo enviar la orden.', Colors.rejected);
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
    snackbarVisible,
    snackbarMessage,
    snackbarColor,
    hideSnackbar,
  };
};

export default useOrderModal;
