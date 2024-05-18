import React, { useState } from 'react';

const Header = ({ isDarkMode, onDarkModeClick }) => {
  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <h1>Dani</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
};

export default Header;