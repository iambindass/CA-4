import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ toggleColorMode, darkMode }) => {
    return (
      <nav className="navbar">
        <div className="logo">Quiz App</div>
        <button className={`color-button ${darkMode ? 'dark-mode' : ''}`} onClick={toggleColorMode}>
          {darkMode ? 'Dark' : 'Light'}
        </button>
      </nav>
    );
  };
  

export default Navbar;