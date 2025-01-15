import { useState } from 'react';
import css from './SearchResultItems.module.css';

const SearchResultItems = ({ result, id }) => {
  const [showProducts, setShowProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log(showProducts);
  const handleChange = (e) => {
    setSelectedProduct(result.title);
    setShowProducts((showResult) => [result.title]);
  };

  return (
    <div key={id} className={css.resultItems}>
      <p
        value={selectedProduct}
        onClick={handleChange}
        // className={selectedProduct === result.title ? css.selected : ''}
      >
        {result.title}
      </p>
    </div>
  );
};

export default SearchResultItems;

/* const SearchResultItems = ({ result, id }) => {
  const [showProducts, setShowProducts] = useState([]);

  const handleChange = (e) => {
  
  };

  return (
    <div key={id} className={css.resultItems}>
      <p onClick={handleChange} className={selectedProduct === result.title ? css.selected : ''}>{result.title}</p>
    </div>
  );
}; */
