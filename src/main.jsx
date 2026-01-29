import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WebAppSummaryProvider } from './context/WebAppSummaryContext.jsx'
import { AndroidModalProvider } from './context/AndroidModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AndroidModalProvider>
      <WebAppSummaryProvider>
        <App />
      </WebAppSummaryProvider>
    </AndroidModalProvider>
  </StrictMode>,
)
