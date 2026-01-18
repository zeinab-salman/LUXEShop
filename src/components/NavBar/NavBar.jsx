import './NavBar.css'

import  { useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const [maisopen , setmaisopen]= useState(false)
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
        <div className=''>
           <h1>ZShop</h1>
        </div>
        <ul className={`z-links ${maisopen ? 'z-link-open' : ''}`}>
            <li>
                <NavLink to={'/'} className='z-home' onClick={listdown}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/Login'} onClick={listdown}>Login</NavLink>
            </li>
            <li>
                <NavLink to={'/Register'} onClick={listdown}>Register</NavLink>
            </li>
            <li>
                <NavLink to={'/Products'} className='z-Subscriptions' onClick={listdown}>Products</NavLink>
            </li>
             <li>
                <NavLink to={`/ProductsDetails`} className='z-Subscriptions' onClick={listdown}>Product Details</NavLink>
            </li>
        </ul>
        
  </nav>
  )
}
