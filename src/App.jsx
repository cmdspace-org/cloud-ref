import react from 'react'
import './App.css'

import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Transaction from './components/Transaction';
import Dashboard from './components/Dashboard';
import Navbars from './components/Navbars';

function App() {
  
  return (
    <BrowserRouter>
      
        <Navbars />
        <Home />
        <Dashboard />
        <Transaction />
      
      </BrowserRouter>
      
    
  )
}

export default App
