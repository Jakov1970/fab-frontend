import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginPage } from './Login/LoginPage';
import { useLocation, useRoutes } from 'react-router-dom';
import { useAuth } from './useAuth';
import { routes } from './routes';
import { Dashboard } from './Dashboard/Dashboard';

export const App = () => {
  const location = useLocation();
  const isAuth = useAuth();

  let element = useRoutes(routes(isAuth))
  return location.pathname === '/' || !isAuth ? (
    <><LoginPage /></>
  ) : (
    <Dashboard />
  );
}

export default App;
