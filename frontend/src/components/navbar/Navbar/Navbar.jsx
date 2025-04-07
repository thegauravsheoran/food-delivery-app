import React, { useContext, useState } from 'react'
import './Navbar.css'
import search from '../../../assets/frontend_assets/search_icon.png'
import basket from '../../../assets/frontend_assets/basket_icon.png'
import { assets } from '../../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
      </ul>
      <div className='navbar-right'>
        <img src={search} alt='' />
        <div className='nav-basket-icon'>
          <Link to='/cart'><img src={basket} alt='profile' /></Link>
          <div className={getTotalCartAmount()===0 ? "":"dot"}></div>
        </div>
        <button className='navbarsignup-button' onClick={() => setShowLogin(true)}>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
