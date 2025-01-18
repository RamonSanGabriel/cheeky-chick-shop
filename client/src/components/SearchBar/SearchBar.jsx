// import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { HiSearch } from 'react-icons/hi';
import css from './SearchBar.module.css';
import { useState } from 'react';
import SearchResults from './SearchResults/SearchResults';
import axios from 'axios';

export const SearchBar = ({ setResults, results }) => {
  const [input, setInput] = useState('');

  const fetchData = async (value) => {
    const url = `https://dummyjson.com/products/search?q=${input}`;
    const response = await axios.get(url);
    const result = response.data.products.filter((product) => {
      return (
        value &&
        product &&
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(result);
    ('');
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <form className={css.inputWrapper} action="">
        <div className={css.inputContainer}>
          <DebounceInput
            className={css.input}
            type="text"
            value={input}
            // onChange={(e) => handleChange(e.target.value)}
            onChange={(e) => handleChange(results)}
            placeholder="Search products..."
            minLength={1}
            debounceTimeout={500}
          />
          <HiSearch className={css.icon} />
          <SearchResults results={results} />

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
