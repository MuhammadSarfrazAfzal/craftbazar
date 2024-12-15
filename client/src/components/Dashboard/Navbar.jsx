import React from 'react'
import "./Navbar.css";
import { useState } from 'react';
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
          <a href="#dashboard">Dashboard</a>
          <a href="#orders">Orders</a>
          <a href="#gigs">Gigs</a>
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
                <a href="#logout">Log Out</a>
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