import { axiosInstance } from './apiSetup';

export const loginUser = () => axiosInstance?.get(`authentication`)

export const getDashboardData = () => axiosInstance?.get('dashboard/recentActivities') 