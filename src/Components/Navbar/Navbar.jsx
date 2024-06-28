import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/me.jpg';
import moon_light_icon from '../../assets/moon.png';
import moon_dark_icon from '../../assets/whitemoon.png';
import { Link } from 'react-router-dom'

const Navbar = ({ setSidebar, toggleTheme, theme }) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="" />
        <Link to='/'><img className='logo' src={logo} alt="" /></Link>
      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <button className='theme-toggle' onClick={toggleTheme}>
        <img className='moon-icon' src={theme === 'light' ? moon_light_icon : moon_dark_icon} alt='Toggle Theme' />
        </button>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
