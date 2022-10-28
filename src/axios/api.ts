import { axiosInstance } from './apiSetup';

export const loginUser = (form: any) => axiosInstance?.post(`users`, form)

export const getDashboardData = () => axiosInstance?.get('dashboard') 