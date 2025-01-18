import { useState } from 'react';
import css from './SearchResultItems.module.css';
import ShowResults from '../ShowResults/ShowResults';

const SearchResultItems = ({ result, id }) => {
  const [showProducts, setShowProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // console.log(showProducts);

  const handleChange = (e) => {
    setSelectedProduct(result.title);
    setShowProducts(result.title);

    if (setSelectedProduct === showProducts) {
      setShowProducts([]);
    }
  };

  return (
    <div>
      <div key={id} className={css.resultItems}>
        <button
          className={css.resultItemsBtn}
          value={selectedProduct}
          onClick={handleChange}
          // className={selectedProduct === result.title ? css.selected : ''}
        >
          <p>{result.title}</p>
        </button>
        <ShowResults result={showProducts} />
      </div>
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
