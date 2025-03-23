import apiClient from '../api/axiosInstance';
import { Instrument } from '../types/instruments';

export const getInstruments = async () => {
  const url = '/instruments';

  const response = await apiClient.get<Instrument[]>(url);
  return response.data;
};
