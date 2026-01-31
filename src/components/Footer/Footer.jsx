import Button from "../Button/Button";
import "./Footer.css"
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="flex-center">
        <div className="flex-center footer-div1">
          <div className="footer-logo">

            <h2>LUXE<span id='logo'>SHOP</span> </h2>
            <p className=" ">Curating timeless pieces for the modern connoisseur. Quality, craftsmanship, and style that transcends trends.   </p>
          </div>
          <p id="join-text"> Join the LuxeShop Family </p>
        </div>
        <div className=" footer-develop">

          <p id="develop-text">
            Developed By<a href="https://algo-code.com"> AlgoCode</a>
          </p>
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
