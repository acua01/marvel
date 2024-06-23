import axios, { InternalAxiosRequestConfig } from 'axios';

export const axiosClient = axios.create();

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.baseURL = 'https://gateway.marvel.com';
  return config;
});
