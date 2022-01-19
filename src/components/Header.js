import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import logo from './logo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

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

      <div className="header__right">
          <HeaderOption Icon={HomeRoundedIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
          <HeaderOption Icon={ChatRoundedIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
          <HeaderOption avatar="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" title="Me" />
      </div>
    </div>
  );
}

export default Header;
