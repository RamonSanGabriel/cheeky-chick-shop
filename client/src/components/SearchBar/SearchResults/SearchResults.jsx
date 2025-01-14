import css from './SearchResults.module.css';

const SearchResults = ({ results }) => {
  return (
    <div className={css.productArrContainer}>
      {/* <h2>{results.title}</h2> */}

      {/*   {results.map((result, id) => (
        <div key={id}>
          <img src={result.images[0]} alt="product image" />

        </div>
      ))} */}
      {results.map((result, id) => {
        return (
          <div className={css.productContainer} key={id}>
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
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
