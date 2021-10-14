import React from 'react';
import './headerStyle.scss';
import logo from './../../images/lafia_logo 1.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div>
          <Link className="header__wrapper__logo" to="/client-list">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div style={{ display: 'flex' }}>
          <p>AVATAR</p>
          <p>AVATAR</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
