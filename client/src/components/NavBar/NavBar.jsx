import css from './NavBar.module.css';
import { MdOutlineMenu } from 'react-icons/md';
import { Sidebar } from '../Sidebar/Sidebar';
import { useToggle } from '../../hooks/useToggle';
import { navLinks } from '../../data/nav-links';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { FaUser } from 'react-icons/fa';
// import { useState } from 'react';
// import { Loader } from '../Loader/Loader';
// import { SearchBar } from '../SearchBar/SearchBar';
// import axios from 'axios';

const NavBar = ({ onChange, value }) => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get('query') ?? '';

  return (
    <div className={css.navBarContainer}>
      <nav className={css.navBar}>
        <Logo />
        <div className={css.formContainer}>
          <form role="search">
            {/* prettier-ignore */}
            {/* Add Search bar Input */}
          </form>
        </div>

        <div className={css.dropDown}>
          <div className={css.dropDownUser}>
            <FaUser />
            <p>
              <a className={css.link} href="#">
                User
              </a>
            </p>
          </div>
          <div className={css.dropdownContent}>
            <ul className={css.linkList}>
              {navLinks.map(({ id, link, path }) => (
                <li key={id}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.linkActive : css.link
                    }
                    to={path}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <MdOutlineMenu
          className={`${css.hamburgerIcon} ${
            isSidebarOpen && css.visuallyHidden
          }`}
          onClick={toggleSidebar}
        />

        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </nav>
    </div>
  );
};

export default NavBar;
