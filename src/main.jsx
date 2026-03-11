import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DuaList from './DuaList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DuaList />
  </StrictMode>,
)
