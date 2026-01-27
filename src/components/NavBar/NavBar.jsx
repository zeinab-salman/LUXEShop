import './NavBar.css'
import { FaCartShopping } from "react-icons/fa6";
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaClipboardUser } from "react-icons/fa6";
import { useAuth } from './AuthProvider';
import Button from "../../components/Button/Button"
export default function NavBar() {
  const {user,logout}=useAuth();
  const [maisopen, setmaisopen] = useState(false)
  const [mascroll, masetScroll] = useState(false);
  const listdown = () => {
    setmaisopen(!maisopen);
  };
  useEffect(() => {
    const mahandleScroll = () => {
      if (window.scrollY > 50) {
        masetScroll(true);
      } else {
        masetScroll(false);
      }
    };

    window.addEventListener('scroll', mahandleScroll);
    return () => {
      window.removeEventListener('scroll', mahandleScroll);
    };
  }, []);

  return (
    <nav className={`z-navbar ${mascroll ? 'z-nav2' : ''}`} onClick={listdown}>
      <div className='logo'>
        <h1>LUXE<span id='nav-right'>SHOP</span> </h1>

      </div>
      <div className="btn-open" onClick={listdown}>
        <div className='line'> </div>
        <div className='line'> </div>
        <div className='line'></div>
      </div>
      <ul className={`z-links ${maisopen ? 'z-link-open' : ''}`}>
        <li>
          <NavLink to={'/'} className='z-home' onClick={listdown}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/Login'} onClick={listdown}>Login</NavLink>
        </li>

        <li>
          <NavLink to={'/Products'} className='z-details' onClick={listdown}>Products</NavLink>
        </li>
        <li>
          <NavLink to={'/About'} className='z-details' onClick={listdown}>About</NavLink>

        </li>
        <li>
          <NavLink to={'/Contact'} className='z-details' onClick={listdown}>Contact</NavLink>
        </li>
         <li>
          <NavLink to={'/Collection'} className='z-details' onClick={listdown}>Collections</NavLink>
        </li>
       {user?(<>
        <li>
          <NavLink to={'/UserCart'} className='z-details cart-icon' onClick={listdown}>< FaCartShopping /></NavLink>

        </li>
          <li>
          <NavLink to={'/UserOrders'} className='z-details cart-icon2' onClick={listdown}><  FaClipboardUser/> </NavLink>

        </li>
         <li>
      <Button   className='z-details cart-icon' onClick={logout} type="logout-btn" text="Logout"></Button>

        </li>
      </>):(<NavLink to={'/login'}></NavLink>)}
      </ul>

    </nav>
  )
}
