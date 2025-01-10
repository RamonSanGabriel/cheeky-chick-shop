import css from './Home.module.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Information from '../../components/Information/Information';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  const [array, setArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  axios.defaults.withCredentials = true;
  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://cheeky-chick-shop-server.onrender.com/'
      );
      /*     const response = await axios.get(
        'https://cheeky-chick-shop-backend.vercel.app/'
      ); */

      setArray(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.contacts);
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
      <div className={css.productArrContainer}>
        {array.map((array) => {
          return (
            <div className={css.productContainer} key={array.id}>
              <div className={css.productImageContainer}>
                <img
                  className={css.productImage}
                  src={array.imgUrl}
                  alt={array.name}
                />
              </div>
              <div>
                <ul className={css.productList}>
                  <div className={css.productImageName}>
                    <li>
                      <h2 className={css.productName}>{array.name}</h2>
                    </li>
                  </div>
                  <div>
                    <li>
                      <p>Price: {array.price}</p>
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
