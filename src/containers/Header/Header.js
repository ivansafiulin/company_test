import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header container">
      <div className="header__logo">
        <img src="./logo/logo.svg" alt="logo" />
      </div>
      <div className="header__menu">
      <div className="mobile-menu">
        <img src="./icons/line-menu.svg" alt="logo" />
      </div>
      </div>
    </div>
  )
};

export default Header;
