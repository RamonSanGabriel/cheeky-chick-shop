import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api');
    setArray(response.data.message);
    console.log(response.data.message);
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

  return (
    <>
      {array.map((message, index) => (
        <div key={index}>
          <p>{message}</p>
        </div>
      ))}
    </>
  );
}

export default App;
