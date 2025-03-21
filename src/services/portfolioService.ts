import apiClient from "../api/axiosInstance";

export const getPortfolio = async () => {
  const response = await apiClient.get('/portfolio');
  return response.data;
};