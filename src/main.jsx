import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './All-Jsx/AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './All-Jsx/Router/MainRoute.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
