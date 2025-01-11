import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { HiSearch } from 'react-icons/hi';
import css from './SearchBar.module.css';
import { useState } from 'react';

export const SearchBar = ({ onChange, value, setResults }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = (value) => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        const results = json.filter((product) => {
          return (
            value &&
            product &&
            product.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    // console.log(e.target.value);
  };
  /*  const handleChange = (e) => {
    onChange(e.target.value);
    console.log(handleChange);
  }; */
  return (
    <div className={css.inputWrapper}>
      <DebounceInput
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search movies..."
        minLength={2}
        debounceTimeout={500}
      />
      <HiSearch className={css.icon} />
    </div>
  );
};
SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
