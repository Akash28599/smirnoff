import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Apply dark mode from localStorage on initial load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
