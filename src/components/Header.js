import React from 'react';
import './Header.css';
import logo from './logo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="LinkedIn" />

        <div className="header__search">
          <SearchRoundedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
