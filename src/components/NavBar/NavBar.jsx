import './NavBar.css'

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
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
        
      </ul>

    </nav>
  )
}
