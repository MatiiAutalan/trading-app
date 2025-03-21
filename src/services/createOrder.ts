import apiClient from "../api/axiosInstance";

export const createOrder = async (orderData: {
  instrument_id: number;
  side: 'BUY' | 'SELL';
  type: 'MARKET' | 'LIMIT';
  quantity: number;
  price?: number;
}) => {
  const response = await apiClient.post('/orders', orderData);
  return response.data;
};