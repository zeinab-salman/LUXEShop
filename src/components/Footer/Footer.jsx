import Button from "../Button/Button";
import "./Footer.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
      <footer className="flex-center">
        <div className="flex-center footer-div1">
          <div className="footer-logo">

            <h2>LUXE<span id='logo'>SHOP</span> </h2>
            <p>Curating timeless pieces for the modern connoisseur. Quality, craftsmanship, and style that transcends trends.   </p>
          </div>
          <p id="join-text"> Join the LuxeShop Family </p>
        </div>
        <div className=" footer-develop">
          <motion.p
            animate={{
              scale: [1, 1.1, 1], // يكبر بنسبة 10% ثم يعود لحجمه
              textShadow: [
                "0px 0px 0px rgba(0,112,243,0)",
                "0px 0px 20px rgba(0,112,243,0.5) ",
                "0px 0px 0px rgba(0,112,243,0)"
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            id="develop-text"
          >

            Developed By<a href="https://algo-code.com"> AlgoCode</a>
          </motion.p>
          <Link to="/Register">
            <Button
              text="Register"
              type="hero-btn " />
          </Link>
        </div>
      </footer>
    </>
  );
}
