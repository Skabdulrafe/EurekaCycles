
import React from "react";
import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import GetData from './GetData';
import Navbar from './Navbar';
import ProductDetails from './productDetails';
import Navbar2 from './navbar2';
import CategoryPage from './pages/CategoryPage';
import AboutUs from './pages/AboutUs';
import ErrorBoundary from './ErrorBoundary';
import Footer from './components/FooterNew';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NavbarAdmin from './components/NavbarAdmin';
import Show from './pages/show';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import ShowOrders from "./pages/ShowOrders";
import AdminShow from "./pages/AdminShow";
import PreOrder from "./pages/preOrder";
import CustomerSupport from "./pages/CustomerSupport";
import PreorderTable from "./pages/PreorderTable";
import NewNav from "./components/NewNav";
import Homepage_a from "./pages/HomePage_a";
import FooterNew from "./components/FooterNew";


const App = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Redirect user if logged in and currently on a non-admin route
  useEffect(() => {
    if (token && location.pathname === "/login") {
      navigate("/"); // ✅ Redirect to admin dashboard
    }
  }, [token, location, navigate]);

  return (
    <div>
      {!token ? (
        <div>
          {/* <Navbar /> */}
          <NewNav />
          <ErrorBoundary fallback={<h2>Oops! Something went wrong while loading the category.</h2>}>
            <Routes>
              <Route path="/" element={<GetData />} />
              <Route path='/homepage' element={<Homepage_a />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
             
               <Route path="/shoppingcart" element={<ShoppingCartPage/>} />
                       <Route path="/checkout" element={<CheckoutPage/>} />
                 <Route path="/order-summary" element={<OrderSummaryPage />} />
                    <Route path="/preorder" element={<PreOrder/>} />
                    <Route path="/customersupport" element={<CustomerSupport/>} />
            </Routes>
          </ErrorBoundary>
          <FooterNew/>
        </div>
      ) : (
        <div>
          <NavbarAdmin />
          <Routes>
             <Route path='/' element={<Homepage_a />} />
            {/* <Route path="/" element={<GetData />} /> */}
            <Route path="/ALLPRODUCTS" element={<Show />} />
             <Route path="/ALLORDERS" element={<ShowOrders/>} />
              <Route path="/ALLUSERS" element={<AdminShow/>} />
               <Route path="/PREORDERREQUESTS" element={<PreorderTable/>} />
          </Routes>
           <FooterNew/>
        </div>
      )}
    </div>
  );
};

export default App;
