// import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { HiSearch } from 'react-icons/hi';
import css from './SearchBar.module.css';
import { useState } from 'react';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  // const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch(`https://dummyjson.com/products/search?q=${input}`)
      .then((response) => response.json())
      .then((json) => {
        // setResults(value);
        console.log(json);
        /*  const results = json.filter((product) => {
          return (
            product && product.title.toLowerCase().includes(value.toLowerCase())
          );
        }); */
        // console.log(value);
        // console.log(results);
      });
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
        </div>
      </form>
    </>
  );
};
/* SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
}; */
