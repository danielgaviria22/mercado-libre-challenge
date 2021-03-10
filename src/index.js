import React from 'react';
import ReactDOM from 'react-dom';
import { RequestProvider } from 'react-request-hook';
import axios from 'axios';
import App from './views/App';
import { GlobalStyles } from './config/styles';
import { API_URL } from './config/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <GlobalStyles />
      <App />
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
