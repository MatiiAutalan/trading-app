import apiClient from '../api/axiosInstance';

export const getInstruments = async () => {
  const response = await apiClient.get('/instruments');
  return response.data;
};
