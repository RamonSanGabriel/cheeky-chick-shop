import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import logo from '../../images/cheekyChickShop.jpg';

const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <div className={css.logoContainer}>
          <img
            className={css.logoHeader}
            src={logo}
            alt="Cheeky Chick Shop Logo"
          />
          <h2>
            <span>C</span>heeky
            <span>C</span>hick
            <span>S</span>hop
          </h2>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
