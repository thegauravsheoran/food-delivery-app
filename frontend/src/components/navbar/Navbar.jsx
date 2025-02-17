import React, { useState } from 'react'
import './Navbar.css'
import search from '../../assets/frontend_assets/search_icon.png'
import basket from '../../assets/frontend_assets/basket_icon.png'

const Navbar = () => {

  const [menu, setMenu]= useState("home");

  return (
    <div className='navbar'>
        <div className='app-logo'>Tastoo</div>
        <ul className='nav-links'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("explore")} className={menu==="explore"?"active":""}>menu</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>explore</li>
        </ul>
        <div className='nav-buttons'>
          <img className='profile-image' src={search} alt='profile' />
          <img className='profile-image' src={basket} alt='profile' />
          <button className='nav-button'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar
