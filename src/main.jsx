import React from 'react'
import ReactDOM from 'react-dom/client'

// import { router } from './App'
// import { RouterProvider } from 'react-router-dom'
import App from './App'
import Menu from './components/Menu/Index'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <App />
    <Footer />
  </React.StrictMode>,
)
