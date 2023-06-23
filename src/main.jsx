import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MCRProvider } from './Context/context.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MCRProvider>
        <App />
      </MCRProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
