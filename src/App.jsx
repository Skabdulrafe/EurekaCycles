import React from 'react'
import GetData from './GetData'
import Navbar from './Navbar'
import Footer from './components/Footer'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import { Routes,Route } from 'react-router-dom'



const App = () => {
  return (
    <div className='bg-red-400'>
      <Navbar/>
      <GetData/>

      
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
      
      
      <Footer />

      </div>
  )
}

export default App