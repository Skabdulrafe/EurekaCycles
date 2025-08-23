import React from 'react'
// import Ghap from './jap'
// import GetData from './GetData'
 import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <div className='bg-red-400'> 
    <Navbar/>
      {/* <GetData/> */}


      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

     <Footer /> 

  
      </div>
  )
}

export default App