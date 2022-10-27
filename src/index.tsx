import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/AvenirLTStd-Book.otf';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './common/AppProvider';
import { I18nProvider } from './i18/i18nProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider components={[BrowserRouter, ErrorBoundary, I18nProvider]}>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
