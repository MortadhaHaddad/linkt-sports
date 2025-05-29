import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App7.jsx'
import App1 from './App1.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import App5 from './App5.jsx'
import App6 from './App6.jsx'
import App7 from './App7.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1 />
    <App2 />
    <App3 />
    <App4 />
    <App5 />
    <App6 />
    <App7 />

  </StrictMode>,
)
