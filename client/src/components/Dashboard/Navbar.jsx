import React from 'react'
import "./Navbar.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
    <nav className="seller-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLYvQTHXAyN4wo64J02IBmJo_KgaQiiS5KA&s"
              alt="Fiverr Logo"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to='/SellerForm/Accountdetail/dashboard'><a href="#dashboard">Dashboard</a></Link>
          <Link to='/SellerForm/Accountdetail/dashboard/order'><a href="#orders">Orders</a></Link>
          <Link to='/SellerForm/Accountdetail/dashboard/service'><a href="#gigs">Services</a></Link>
          <a href="#analytics">Analytics</a>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search orders, gigs, etc."
          />
          <button>Search</button>
        </div>

        {/* Right Side Icons */}
        <div className="navbar-right">
          {/* Notification Icon */}
          <div className="navbar-icon">
            <i className="fas fa-bell"></i>
          </div>

          {/* Profile Dropdown */}
          <div className="navbar-profile" onClick={toggleDropdown}>
            <img
              src="https://avatars.githubusercontent.com/u/153350863?v=4"
              alt="Profile"
              className="profile-pic"
            />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="#profile">Profile</a>
                <a href="#settings">Settings</a>
                <Link to='/login'><a href="#logout">Switch to Buying</a></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
