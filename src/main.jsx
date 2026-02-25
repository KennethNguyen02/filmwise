import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <main className="min-h-screen bg-background text-text-primary"> {/* darkmode*/ }
          <App />
        </main>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
