import "./MenuComponent.css";
import { MdSpaceDashboard, MdBorderColor, MdPeopleAlt } from "react-icons/md";
import { FaShirt, FaListUl } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";

export default function MenuComponent() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    
      <FaListUl className="list-open display-none-icon" onClick={toggleMenu} />

      <nav className={`menu-nav ${menuOpen ? "open" : "display-none"}`} onClick={toggleMenu}>
        <ul>
          <li id="logo-link-d">
            LUXE<span id="nav-right-d">SHOP</span>
          </li>

          <li id="main-menu">MAIN MENU</li>

          <li className="li-menu">
            <NavLink to="/HomeDashboard">
              <MdSpaceDashboard className="icon-menu" />
              Dashboard
            </NavLink>
          </li>

          <li className="li-menu">
            <NavLink to="/ProductsDashboard">
              <FaShirt className="icon-menu" />
              Products
            </NavLink>
          </li>

          <li className="li-menu">
            <NavLink to="/OrdersDashboard">
              <MdBorderColor className="icon-menu" />
              Orders
            </NavLink>
          </li>

          <li className="li-menu">
            <NavLink to="/UsersDashboard">
              <MdPeopleAlt className="icon-menu" />
              Customers
            </NavLink>
          </li>

          <li>
            <Button
              className="li-menu cart-icon"
              onClick={logout}
              type="logout-btn"
              text="Logout"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
