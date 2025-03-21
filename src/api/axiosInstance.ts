import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: 'https://dummy-api-topaz.vercel.app',
}

export const apiClient = axios.create(axiosConfig);

export default apiClient;