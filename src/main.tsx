import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculator from './Calculator'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <StrictMode>
    <Calculator />
  </StrictMode>
)
