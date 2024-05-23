import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'


import "./styles/header.scss"
import "./styles/App.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"






const App = () => {
 return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
   <Route path="/Services" element={<Services/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App