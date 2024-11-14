// import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <BrowserRouter>
  <ChakraProvider>
  
    <App />
 
  </ChakraProvider>
  </BrowserRouter>
  </AuthProvider>
)