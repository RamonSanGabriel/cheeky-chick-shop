import css from './NavBar.module.css';
import { MdOutlineMenu } from 'react-icons/md';
import { Sidebar } from '../Sidebar/Sidebar';
import { useToggle } from '../../hooks/useToggle';

const NavBar = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);
  return (
    <nav className={css.navBar}>
      <a href="#">Home</a>

      <form role="search">
        <input type="search" placeholder="Search" aria-label="Search" />
        <button type="submit">Search</button>
      </form>
      {/*  <ul>
        <li>
          <a
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            User
          </a>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </li>
      </ul> */}
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
