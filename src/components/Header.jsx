import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';
import './Header.css';
import HeaderOption from './HeaderOption';
import logo from '../assets/logo.svg';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

 const history = useHistory();

  const handleClick = () => {
    // Navigate to jobs page
    history.push('/jobs');
  };


  const handleGoToNetwork = () => {
    history.push('/network');
  };

  const handleGoToHome = () => {
    history.push('/');
  };

  const handleGoToNotification = () => {
    history.push('/notifications');
  }

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
          <HeaderOption Icon={HomeRoundedIcon} title="Home" onClick={handleGoToHome} />
          <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network" onClick={handleGoToNetwork} />
          <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" onClick={handleClick} />
          <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" onClick={handleGoToNotification} />
          <HeaderOption 
            avatar={true}
            title="Logout" 
            onClick={logoutOfApp}
          />
      </div>
    </div>
  );
}

export default Header;
