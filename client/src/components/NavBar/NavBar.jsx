import css from './NavBar.module.css';
import { MdOutlineMenu } from 'react-icons/md';
import { Sidebar } from '../Sidebar/Sidebar';
import { useToggle } from '../../hooks/useToggle';
import { navLinks } from '../../data/nav-links';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);

  return (
    <nav className={css.navBar}>
      <p>
        <a className={css.link} href="#">
          Home
        </a>
      </p>

      <div>
        <form role="search">
          <input
            className={css.navSearch}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/*     <button className={css.link} type="submit">
            Search
          </button> */}
        </form>
      </div>

      <div className={css.dropDown}>
        <p>
          <a className={css.link} href="#">
            User
            {/* <i className={css.faCaretDown}></i> */}
          </a>
        </p>
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
  );
};

export default NavBar;
