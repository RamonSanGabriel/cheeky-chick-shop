import axios from 'axios';
import { useState, useEffect } from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  const [array, setArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAPI = async (req, res) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/contacts');

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
    <div className={css.headerContainer}>
      {array.map((array) => {
        return (
          <div key={array.id}>
            <div className={css.headerImageContainer}>
              <img src={array.imgUrl} alt="" />
            </div>
            <h2>{array.name}</h2>
            <p>{array.email}</p>
            <p>{array.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
