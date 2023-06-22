import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const CurrentLiabilitiesChart = () => {
  const [currentLiabilitiesData, setCurrentLiabilitiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/financial-data?ticker=AAPL');
        const data = response.data;

        // Extract current liabilities data for each quarter
        const currentLiabilities = data.map((item) => ({
          quarter: item.fiscal_period,
          value: item.financials.balance_sheet.current_liabilities.value
        }));

        setCurrentLiabilitiesData(currentLiabilities);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const chartData = {
    options: {
      xaxis: {
        categories: currentLiabilitiesData.map((item) => item.quarter)
      }
    },
    series: [
      {
        name: 'Current Liabilities',
        data: currentLiabilitiesData.map((item) => item.value)
      }
    ]
  };

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={500} height={300} />
    </div>
  );
};

export default CurrentLiabilitiesChart;
