import React, { useEffect } from 'react';
import axios from '../boot/axios';

const TestAxios = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/financial-data', {
          params: {
            ticker: 'AAPL'
          }
        });
        console.log(response.data); // Log the response data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>Testing Axios...</div>;
};

export default TestAxios;
