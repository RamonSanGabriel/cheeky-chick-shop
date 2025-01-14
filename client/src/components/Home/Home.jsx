import css from './Home.module.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Information from '../../components/Information/Information';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';
import { SearchBar } from '../SearchBar/SearchBar';
// import SearchResults from '../SearchBar/SearchResults/SearchResults';

const Home = () => {
  const [array, setArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  axios.defaults.withCredentials = false;
  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        // 'https://localhost:8080/products'
        'https://dummyjson.com/products'
      );
      setArray(response.data.products);
    } catch (error) {
      setError(error.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        fetchAPI();
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Header />
      <NavBar />

      {/* prettier-ignore */}
      {/* Add Search bar Input */}

      <SearchBar setResults={setResults} array={array} results={results} />

      <div className={css.productArrContainer}>
        {array.map((array) => {
          return (
            <div className={css.productContainer} key={array.id}>
              <div className={css.productImageContainer}>
                <img
                  className={css.productImage}
                  src={array.images[0]}
                  alt={array.title}
                />
              </div>

              <div className={css.productListWrapper}>
                <ul className={css.productList}>
                  <div className={css.productImageContent}>
                    <li className={css.productListItem}>
                      <div className={css.productListPrice}>
                        <p>₱ {array.price}</p>
                      </div>
                    </li>
                  </div>

                  <div className={css.productImageContent}>
                    <li className={css.productListItem}>
                      <div className={css.productListTitle}>
                        <h2>{array.title}</h2>
                      </div>
                    </li>
                  </div>

                  <div className={css.productImageContent}>
                    <li className={css.productListItem}>
                      <div className={css.productListStock}>
                        <p>Stock: {array.stock}</p>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <Information />
      <Footer />
    </>
  );
};

export default Home;
