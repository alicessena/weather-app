import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { ToastContainer } from 'react-toastify'
import './reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <App />
  </StrictMode>,
)
