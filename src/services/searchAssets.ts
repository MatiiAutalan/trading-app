import apiClient from '../api/axiosInstance';

export const searchAssets = async (ticker: string) => {
  const response = await apiClient.get(`/search?query=${ticker}`);
  return response.data;
};
