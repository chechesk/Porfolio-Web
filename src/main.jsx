import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './component/data/data-translate.json'

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
  
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
   
    <App />
    
  </BrowserRouter>,
)
