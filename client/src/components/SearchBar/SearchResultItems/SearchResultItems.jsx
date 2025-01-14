import { useState } from 'react';
import css from './SearchResultItems.module.css';

const SearchResultItems = ({ result }) => {
  const [showProducts, setShowProducts] = useState([]);

  const handleChange = (e) => {
    setShowProducts(showProducts);
    console.log(showProducts);
  };
  return (
    <div key={result} className={css.resultItems}>
      <p onClick={(e) => handleChange(result)}>{result.title}</p>
    </div>
  );
};

export default SearchResultItems;
/* <div className={css.productContainer}>
<div className={css.productImageContainer}>
<img
className={css.productImage}
    src={result.images[0]}
    alt={result.title}
  />
</div>

<div className={css.productListWrapper}>
  <ul className={css.productList}>
    <div className={css.productImageContent}>
      <li className={css.productListItem}>
        <div className={css.productListPrice}>
          <p>₱ {result.price}</p>
        </div>
      </li>
    </div>

    <div className={css.productImageContent}>
      <li className={css.productListItem}>
        <div className={css.productListTitle}>
          <h2>{result.title}</h2>
        </div>
      </li>
    </div>

    <div className={css.productImageContent}>
      <li className={css.productListItem}>
        <div className={css.productListStock}>
          <p>Stock: {result.stock}</p>
        </div>
      </li>
    </div>
  </ul>
</div>
</div> */
