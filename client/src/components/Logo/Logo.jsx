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
            <b>C</b>heeky
            <b>C</b>hick
            <b>S</b>hop
          </h2>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
