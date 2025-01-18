import { useEffect, useState } from 'react';
import css from './ShowResults.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Loader } from '../../Loader/Loader';

const ShowResults = ({ result }) => {
  const { productId } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(result);

  const updateQueryString = (query) => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        getProductById(productId);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {/*   <div className={css.productContainer}>
        <div className={css.productImageContainer}>
          <img className={css.productImage} src={images[0]} alt={title} />
        </div> */}

      <div className={css.productListWrapper}>
        <ul className={css.productList}>
          {/*  <div className={css.productImageContent}>
                  <li className={css.productListItem}>
                    <div className={css.productListPrice}>
                      <p>₱ {price}</p>
                    </div>
                  </li>
                </div> */}

          <div className={css.productImageContent}>
            <li className={css.productListItem}>
              <div className={css.productListTitle}>
                <h2>{result.title}</h2>
              </div>
            </li>
          </div>

          {/*  <div className={css.productImageContent}>
                  <li className={css.productListItem}>
                    <div className={css.productListStock}>
                      <p>Stock: {stock}</p>
                    </div>
                  </li>
                </div> */}
        </ul>
      </div>
      {/* </div> */}
    </>
  );
};

export default ShowResults;
