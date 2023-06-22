import React, { useEffect, useState } from 'react';
import axios from '../boot/axios';

const TestMonthlyChart = () => {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/financial-data', {
          params: {
            ticker: 'AAPL'
          }
        });

        // Assuming response.data is an array
        setFinancialData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (financialData.length === 0) {
    // Render a loading indicator or a message while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Financial Data:</h1>
      <ul>
        {financialData.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestMonthlyChart;
