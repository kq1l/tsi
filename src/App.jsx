import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

import Header from './components/Header';
import Footer from './components/Footer';


import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/About" element = {<About />}></Route>
        <Route path = "/Contacts" element = {<Contacts />}></Route>
      </Routes>      
      </BrowserRouter>
      
    <Footer/>
    </>
  )
}

export default App