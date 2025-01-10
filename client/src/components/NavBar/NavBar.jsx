import css from './NavBar.module.css';
import { MdOutlineMenu } from 'react-icons/md';
import { Sidebar } from '../Sidebar/Sidebar';
import { useToggle } from '../../hooks/useToggle';

const NavBar = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);
  return (
    <nav className={css.navBar}>
      <a href="#">Home</a>

      <div>
        <form role="search">
          <input
            className={css.navSearch}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit">Search</button>
        </form>
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
