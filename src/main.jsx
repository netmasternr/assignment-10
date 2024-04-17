import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import FIrebaseProvider from './Components/FIrebaseProvider/FIrebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <FIrebaseProvider>
      <RouterProvider router={routes} />
    </FIrebaseProvider>

  </React.StrictMode>,
)
