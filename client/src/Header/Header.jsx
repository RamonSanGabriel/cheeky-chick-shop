import axios from 'axios';
import { useState, useEffect } from 'react';

// import { router } from '../../../server/routes/api/messageRouter';

/* const Header = () => {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080');
    setArray(response.data.mockData);
    // setArray(mockData);
    console.log(response.data.mockData);
  };

  useEffect(() => {
    (async () => {
      try {
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div>
      {array.map((contacts, index) => (
        <div key={index}>
          <p>{contacts}</p>
        </div>
      ))}
    </div>
  );
}; */

const Header = () => {
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
    <div>
      {array.map((array) => {
        return (
          <div key={array.id}>
            <h2>{array.name}</h2>
            <p>{array.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
