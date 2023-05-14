import React from 'react'
import ReactDOM from 'react-dom/client'

import Menu from './components/Menu/Index'
import App from './App'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <App />
    <Footer />
  </React.StrictMode>,
)
