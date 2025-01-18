// import css from './Home.module.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Information from '../../components/Information/Information';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';
import { SearchBar } from '../SearchBar/SearchBar';
import ShowResults from '../SearchBar/ShowResults/ShowResults';
import Product from '../Product/Product';

const Home = () => {
  const [array, setArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        // 'https://localhost:8080/products'
        'https://dummyjson.com/products',
        search
      );
      setArray(response.data.products);
    } catch (error) {
      setError(error.data);
    } finally {
      setLoading(false);
    }
  };
  axios.defaults.withCredentials = false;

  useEffect(() => {
    (async () => {
      try {
        fetchAPI(search);
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {};
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

      <SearchBar setResults={setResults} results={results} />
      {/* <ShowResults result={result} /> */}
      <Product array={array} />
      <Information />
      <Footer />
    </>
  );
};

export default Home;
