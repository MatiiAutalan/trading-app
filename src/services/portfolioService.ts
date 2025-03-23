import apiClient from '../api/axiosInstance';

export const getAssets = async () => {
  const response = await apiClient.get('/portfolio');
  return response.data;
};
