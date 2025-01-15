import { useState } from 'react';
import css from './SearchResultItems.module.css';

const SearchResultItems = ({ result, id }) => {
  const [showProducts, setShowProducts] = useState([]);

  const handleChange = (e) => {
    setShowProducts(showProducts);

    // console.log(handleChange);
  };
  return (
    <div key={id} className={css.resultItems}>
      <p onClick={(e) => handleChange(e.target.value)}>{result.title}</p>
    </div>
  );
};

export default SearchResultItems;
