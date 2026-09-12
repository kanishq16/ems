import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'
import AuthContext from './context/AuthContext.jsx'
import taskContext from './context/taskContext.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContext>
   <taskContext>
    <App />
   </taskContext>
   </AuthContext>
  </StrictMode>,
)
