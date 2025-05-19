import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('ia51BXsK_nNHcw6kf'); // Replace with your actual public key

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
