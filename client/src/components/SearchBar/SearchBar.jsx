// import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { HiSearch } from 'react-icons/hi';
import css from './SearchBar.module.css';
import { useState } from 'react';
// import SearchResults from './SearchResults/SearchResults';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
// import { getAllProducts } from '../../../../server/controllers/productController';
// import { httpError } from '../../../../server/helpers/httpError.js';

export const SearchBar = ({ setResults, results }) => {
  const [input, setInput] = useState('');
  // const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const products = getAllProducts();
  const productName = searchParams.get('q') ?? '';

  const updateQuery = (q) => {
    const nextParams = q !== '' ? { q } : {};
    setSearchParams(nextParams);
  };
  /* 
  const visibleProducts = products.filter((product) =>
    product.title.toLowerCase().includes(productName.toLowerCase())
  ); */

  /*   const fetchData = (value) => {
    fetch(`https://dummyjson.com/products/search?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(value);
        const result = json.filter((product) => {
          return (
            product && product.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log(result);
      });
  }; */

  const fetchData = async (value) => {
    // const url = `https://dummyjson.com/products/search?q=${input}`;
    const url = `https://dummyjson.com/products`;
    const response = await axios.get(url);
    const result = response.data.products.filter((product) => {
      return (
        value &&
        product &&
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    // console.log(result);
    setResults(result);
    ('');
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  /*  const handleChange = (e) => {
    onChange(e.target.value);
    console.log(handleChange);
  }; */
  return (
    <>
      <form className={css.inputWrapper} action="">
        <div className={css.inputContainer}>
          {/* <div className={css.inputContainer}> */}
          <DebounceInput
            className={css.input}
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search products..."
            minLength={2}
            debounceTimeout={500}
          />

          <HiSearch className={css.icon} />
          {/* </div> */}

          <div></div>
        </div>
      </form>
    </>
  );
};
/* SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
}; */
