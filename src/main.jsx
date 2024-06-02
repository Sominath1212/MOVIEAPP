import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card'
import './index.css'
import App from './App'
import Navbar from './Navbar.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App  />
 
  </React.StrictMode>,
)
