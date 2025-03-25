import { apiClient } from '@api';

export const getAssets = async () => {
  const response = await apiClient.get('/portfolio');
  return response.data;
};
