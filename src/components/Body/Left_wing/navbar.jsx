// VerticalNavbar.js

import React from 'react';
import { FiHome, FiMail, FiSettings, FiUser } from 'react-icons/fi'; // Import icons from react-icons
import './VerticalNavbar.css'; // Create a CSS file for styling

const navbar = () => {
  return (
    <div className="vertical-navbar">
      <div className="navbar-item">
        <FiHome style={{ color: 'green' }} />
        <span>  Home</span>
      </div>
      <div className="navbar-item">
        <FiMail  style={{ color: 'green' }}/>
        <span>  Messages</span>
      </div>
      <div className="navbar-item">
        <FiSettings style={{ color: 'green' }} />
        <span>  Settings</span>
      </div>
      <div className="navbar-item">
        <FiUser style={{ color: 'green' }} />
        <span>  Profile</span>
      </div>
    </div>
  );
};

export default navbar;
