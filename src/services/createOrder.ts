import { apiClient } from '@api';

export type OrderData = {
  instrument_id: number;
  side: 'BUY' | 'SELL';
  type: 'MARKET' | 'LIMIT';
  quantity: number;
  price?: number;
};

export const createOrder = async (orderData: OrderData) => {
  const response = await apiClient.post('/orders', orderData);
  return response.data;
};
