import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './sass/index.sass'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <StrictMode>
    <App tab="home" />
  </StrictMode>
)

reportWebVitals()
