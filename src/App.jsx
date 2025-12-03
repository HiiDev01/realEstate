import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "../src/pages/Home"
import Nav from '../src/components/Nav'
import Listing from './pages/Listing'
import Footer from './components/Footer'
import PropertyDetails from './pages/PropertyDetails'
import About from './pages/About'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail'
import ContactPage from './pages/Contact'


function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/listing/:id' element={<PropertyDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
