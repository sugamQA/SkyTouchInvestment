import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const root = document.getElementById('root')

if (import.meta.env.DEV) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
} else {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
