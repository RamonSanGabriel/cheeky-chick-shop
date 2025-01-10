import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      ></NavLink>
    </div>
  );
};

export default Logo;
