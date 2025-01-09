import css from './HomePage.module.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Information from '../../components/Information/Information';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';

const HomePage = () => {
  const [array, setArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAPI = async (req, res) => {
    setLoading(true);
    try {
      // const response = await axios.get('http://localhost:8080/api/contacts');
      const response = await axios.get(
        'https://cheeky-chick-shop-server.vercel.app/'
      );

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
    return <div>Loading...</div>;
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
              <ul className={css.productList}>
                <div className={css.productImageContainer}>
                  <img src={array.imgUrl} alt="" />
                </div>

                <li>
                  <h2 className={css.productName}>{array.name}</h2>
                </li>
                <li>
                  <p>Price: {array.price}</p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <Information />
      <Footer />
    </>
  );
};

export default HomePage;
