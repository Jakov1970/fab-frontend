import axios from 'axios';

const URL_ROOT = 'http://localhost:3002/'

export const axiosInstance = axios.create({
  baseURL: URL_ROOT,
  headers: {
    'Accept': 'application/json'
  }
});