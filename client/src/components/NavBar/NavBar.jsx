import css from './NavBar.module.css';
import { MdOutlineMenu } from 'react-icons/md';
import { Sidebar } from '../Sidebar/Sidebar';
import { useToggle } from '../../hooks/useToggle';
import { navLinks } from '../../data/nav-links';
import { NavLink, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import Logo from '../Logo/Logo';
import { FaUser } from 'react-icons/fa';

const NavBar = ({ onChange, value }) => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('query') ?? '';
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  /*   const fetchProductQuery = async (productName) => {
    const response = await axios.get(`search/movie?query=${movieName}`);
    return response.data.results;
  }; */
  /*   const getProductById = async () => {
    try {
      const response = await axios.get(
        `https://dummjson.com/products/search?q=${''}`
      );
      setSearchParams(response.data.title);
      console.log(response.data.title);
    } catch (error) {
      console.log(error);
    }
  }; */

  /*   useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const products = await getProductById(productName);
        setSearchResults(products);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productName]); */
  return (
    <div className={css.navBarContainer}>
      <nav className={css.navBar}>
        {/*    <p className={css.navHome}>
          <a className={css.link} href="#"></a>
        </p> */}
        <Logo />
        <div className={css.formContainer}>
          <form role="search">
            {/* <input
              className={css.navSearch}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
             <button className={css.link} type="submit">
              Search
            </button> */}
            {/* <SearchBar
              value={value}
              onChange={onChange}
              setResults={setResults}
            /> */}
            {/*   {!isLoading ? (
              <Loader />
            ) : productName && searchResults.length === 0 ? (
              <h2>Nothing found</h2>
            ) : (
              <h2>Try again</h2>
            )} */}
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
