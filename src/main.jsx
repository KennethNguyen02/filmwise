import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react'
import { BrowserRouter } from 'react-router-dom'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
          <QueryClientProvider client={queryClient}>
            <main className="min-h-screen bg-background text-text-primary">
              <App />
            </main>
        </QueryClientProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
