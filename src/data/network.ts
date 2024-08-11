import axios from 'axios';

const BASE_URL = "http://159.223.36.142:3000";

const options = {
  baseURL: BASE_URL,
  timeout: 30000,
  validateStatus: null
};

export const defaultHeaders = {
  agent: true,
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  'Access-Control-Allow-Origin': '*'
};

const coreAPI = axios.create(options)
coreAPI.defaults.headers.common = defaultHeaders

coreAPI.interceptors.request.use((request) =>
  requestInterceptor(request),
);

export default coreAPI


function requestInterceptor(config) {
    const token = localStorage.getItem('token') 
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
}