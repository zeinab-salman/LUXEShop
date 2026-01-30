import './NavBar.css'
import { FaCartShopping } from "react-icons/fa6";
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaClipboardUser } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
import { useAuth } from './AuthProvider';
import Button from "../../components/Button/Button";
import { FaUserCircle } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import ProfileModel from "../../components/ProfileModel/ProfileModel";
import WalletModel from "../../components/WalletModel/WalletModel"
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function NavBar() {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const { user, logout } = useAuth();
  const [maisopen, setmaisopen] = useState(false)
  const [listOpen, setListOpen] = useState(false)
  const [mascroll, masetScroll] = useState(false);
  const listdown = () => {
    setmaisopen(!maisopen);
  };

  const list = () => {
    setListOpen(!listOpen);
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
    <><nav className={` nav-3d z-navbar   ${mascroll ? 'z-nav2 ' : ''}`} >


      <div className='logo'>
        <motion.h1
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              "0px 0px 0px rgba(0,112,243,0)",
              "0px 0px 20px rgba(0,112,243,0.5)",
              "0px 0px 0px rgba(0,112,243,0)"
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}

        >
         <a href='/' id='logo-link'> LUXE<span id='nav-right'>SHOP</span></a>
        </motion.h1>
      </div>
      <div className="btn-open" onClick={listdown}>
        <div className='line'> </div>
        <div className='line'> </div>
        <div className='line'></div>
      </div>
      <ul className={`z-links ${maisopen ? 'z-link-open' : ''}`} >
        <li className='li-nav1'>
          <NavLink to={'/'} className='z-home' onClick={listdown}>Home</NavLink>
        </li>
        <li  className='li-nav1' >
          <NavLink to={'/Login'} onClick={listdown}>Login</NavLink>
        </li>

        <li  className='li-nav1' >
          <NavLink to={'/Products'} className='z-details' onClick={listdown}>Products</NavLink>
        </li>
        <li  className='li-nav1'>
          <NavLink to={'/About'} className='z-details' onClick={listdown}>About</NavLink>

        </li>
        <li  className='li-nav1' >
          <NavLink to={'/Contact'} className='z-details' onClick={listdown}>Contact</NavLink>
        </li>
        <li  className='li-nav1' >
          <NavLink to={'/Collection'} className='z-details' onClick={listdown}>Collections</NavLink>
        </li>
      
        {user ? (<>
         < FaListUl className='z-details cart-icon22' onClick={list} /> 
          <ul className={` user-list glass-effect ${listOpen ? 'list-none' : ''}`}>

            <li className='li-nav2'>
              <NavLink to={'/UserCart'} className='z-details cart-icon2' onClick={listdown}>< FaCartShopping /></NavLink>

            </li>
            <li  className='li-nav2' >
              <NavLink to={'/CheckoutPage'} className='z-details cart-icon2' onClick={listdown}>< FaClipboardCheck /></NavLink>

            </li>
            <li  className='li-nav2' >
              <NavLink to={'/UserOrders'} className='z-details cart-icon2' onClick={listdown}><  FaClipboardUser /> </NavLink>

            </li>
            <li  className='li-nav2' >

              <FaUserCircle onClick={() => setProfileOpen(true)} className='z-details cart-icon2' />


            </li>
            <li   className='li-nav2'>
              <GiWallet onClick={() => setWalletOpen(true)} className='z-details cart-icon2' />
            </li>
            <li>
              <Button className='z-details cart-icon' onClick={logout} type="logout-btn" text="Logout"></Button>

            </li></ul>
        </>) : (
          <h2></h2>)}


      </ul>

    </nav>
      <ProfileModel
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
      <WalletModel
        isOpen={walletOpen}
        onClose={() => setWalletOpen(false)}
      />
    </>

  )
}





