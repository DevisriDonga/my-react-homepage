
import React from "react";
import '../navbar/navbar.css';
import brand from '../../assets/brand.png'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart, FiHeart, FiUser, FiHelpCircle } from "react-icons/fi";


const NavbarPrimary = () => {
  return (
    <nav className="navbar-primary">
      <div className="logo"><img src={brand} alt="brand"/></div>
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search for Anything"
        />
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <FiHelpCircle className="menu-icon" />
          <span className="menu-text">Support</span>
        </div>
        <div className="menu-item">
          <FiUser className="menu-icon" />
          <span className="menu-text">Account</span>
        </div>
        <div className="menu-item">
          <FiHeart className="menu-icon" />
          <span className="menu-text">My Favorites</span>
        </div>
        <div className="menu-item">
          <FiShoppingCart className="menu-icon" />
          <span className="menu-text">Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPrimary;
