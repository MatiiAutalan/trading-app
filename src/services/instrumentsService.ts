import { apiClient } from '@api';
import { Instrument } from '@types';

export const getInstruments = async () => {
  const url = '/instruments';

  const response = await apiClient.get<Instrument[]>(url);
  return response.data;
};
