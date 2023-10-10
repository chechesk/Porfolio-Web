import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './component/Config/DarkZone.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </BrowserRouter>,
)
