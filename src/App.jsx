import Home from "./pages/Home/Home";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Register from "./pages/Register/Register"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Loading from "./pages/Loading/Loading";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import UserCart from "./pages/UserCart/UserCart";
import Collection from "./pages/Collection/Collection";
import UserOrder from "./pages/UserOrder/UserOrder";
import CheckoutPage from "./pages/CheckoutPage/Checkoutpage";
import { useState, useEffect } from 'react';
import { CartProvider } from "./pages/UserCart/CartProvider";
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

  return (
    <>
      <CartProvider>
        <NavBar />
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
          </Routes>
        }
        <Footer />
      </CartProvider>
    </>
  );
}
