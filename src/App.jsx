import Home from "./pages/User/Home/Home";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/User/Login/Login";
import Products from "./pages/User/Products/Products";
import ProductDetails from "./pages/User/ProductDetails/ProductDetails";
import Register from "./pages/User/Register/Register"

import Loading from "./pages/Loading/Loading";
import About from "./pages/User/About/About";
import Contact from "./pages/User/Contact/Contact";
import UserCart from "./pages/User/UserCart/UserCart";
import Collection from "./pages/User/Collection/Collection";
import UserOrder from "./pages/User/UserOrder/UserOrder";
import VerificationCodeModel from "./components/VerificationCodeModel/VerificationCodeModel";
import CheckoutPage from "./pages/User/CheckoutPage/CheckoutPage";
import HomeDashboard from "./pages/Dashboard/HomeDashboard/HomeDashboard";
import { useState, useEffect } from 'react';
import { CartProvider } from "./pages/User/UserCart/CartProvider";
import toast, { Toaster } from 'react-hot-toast';
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";
import { useLocation } from "react-router-dom";
import OrdersDashboard from "./pages/Dashboard/OrdersDashboard/OrdersDashboard";
import UsersDashboard from "./pages/Dashboard/UsersDashboard/UsersDashboard";
import ProductsDashboard from "./pages/Dashboard/ProductsDashboard/ProductsDashboard";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const hideLayout = ["/HomeDashboard", "/ProductsDashboard", "/OrdersDashboard", "/UsersDashboard"].includes(location.pathname);


  localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'admin' }));


  return (
    <>
      <Toaster />
      <CartProvider>
        {!hideLayout && <NavBar />}

        {loading ? <Loading /> :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Products/:id" element={<ProductDetails />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/UserCart" element={<UserCart />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/UserOrders" element={<UserOrder />} />
            <Route path="/VerificationCode" element={<VerificationCodeModel />} />
            <Route
              path="/HomeDashboard"
              element={<HomeDashboard />}
            />

            <Route path="/ProductsDashboard" element={<ProductsDashboard />} />
            <Route path="/OrdersDashboard" element={<OrdersDashboard />} />
            <Route path="/UsersDashboard" element={<UsersDashboard />} />
          </Routes>
        }
        {!hideLayout && <Footer />}
      </CartProvider>
    </>
  );
}
