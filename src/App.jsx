 import React from 'react'
 import { Routes, Route} from "react-router-dom";
import GetData from './GetData'
 import Navbar from './Navbar'
import ProductDetails from './productDetails'
import Navbar2 from './navbar2';
import CategoryPage from './pages/CategoryPage';
import AboutUs from './pages/AboutUs';
import ErrorBoundary from './ErrorBoundary';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";


const App = () => {
  return (

    <div className=''>
      {/* <Navbar2/> */}
      <Navbar/>
     
 {/* <Routes> 
  <Route path="/" element={<GetData/>} />
    <Route path="/AboutUs" element={<AboutUs/>} /> 
          <Route path="/category/:categoryName" element={<CategoryPage/>} />
  <Route path="/product/:id" element={<ProductDetails />} /></Routes> */}
     <ErrorBoundary fallback={<h2>Oops! Something went wrong while loading the category.</h2>}>
        <Routes>
           <Route path="/" element={<GetData/>} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetails />} /> 
            <Route path="/AboutUs" element={<AboutUs/>} /> 
            <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer/>
    </div>
  )
}

export default App