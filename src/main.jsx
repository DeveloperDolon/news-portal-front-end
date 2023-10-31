import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './All-Jsx/AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './All-Jsx/Router/MainRoute.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={MainRoute}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
