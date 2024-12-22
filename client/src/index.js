import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './styles/main.css'; // Make sure this file exists
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);