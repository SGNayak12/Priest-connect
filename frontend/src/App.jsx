import React from 'react'
import { Route,Routes } from 'react-router-dom';
import '../src/App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Registerpriest from './components/Registerpriest';
import Registeruser from './components/Registeruser';
import PriestProfile from './components/PriestProfile';
import UserProfile from './components/UserProfile';
import PriestLogin from './components/PriestLogin';
import UserLogin from './components/UserLogin';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={
        <>
        <Navbar/>
        <Home/>
        <Footer/>
        </>
      }></Route>
      <Route path='/Home' element={<Navbar/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/registepriest' element={<Registerpriest/>}></Route>
      <Route path='/loginpriest' element={<PriestLogin/>}></Route>
      <Route path='/registeruser' element={<Registeruser/>}></Route>
      <Route path='/loginuser' element={<UserLogin/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

      <Route path='/priestprofile' element={<PriestProfile/>}></Route>
      <Route path='/userprofile' element={<UserProfile/>}></Route>
      
    </Routes>

  </>
  )
}

export default App