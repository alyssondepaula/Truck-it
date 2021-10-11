import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './locales'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter
    forceRefresh={true}
    >
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
