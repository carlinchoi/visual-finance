import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { fetchCurrentLiabilities } from '../store/reducers/currentLiabilitiesReducer';

const CurrentLiabilitiesChart = () => {
  const currentLiabilitiesData = useSelector((state) => state.currentLiabilities.currentLiabilitiesData);
  const loading = useSelector((state) => state.currentLiabilities.loading);
  const error = useSelector((state) => state.currentLiabilities.error);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/financial-data?ticker=AAPL');
        const data = response.data;

        dispatch(fetchCurrentLiabilities(data)); // Store the entire response.data

        const currentLiabilities = data
          .filter((item) => {
            const fiscalPeriod = item.fiscal_period.toUpperCase();
            return fiscalPeriod === 'Q1' || fiscalPeriod === 'Q2' || fiscalPeriod === 'Q3' || fiscalPeriod === 'Q4';
          })
          .map((item) => ({
            quarter: item.fiscal_period,
            year: item.fiscal_year,
            value: item.financials.balance_sheet.current_liabilities.value
          }));

        dispatch(fetchCurrentLiabilities(currentLiabilities));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const chartData = {
    options: {
      xaxis: {
        categories: currentLiabilitiesData.map((item) => `${item.quarter} ${item.year}`).reverse(),
        title: {
          text: 'Fiscal Year + Fiscal Period'
        }
      },
      yaxis: {
        title: {
          text: 'In Millions'
        },
        labels: {
          formatter: (value) => `${(value / 1000000).toFixed(0)}M`
        }
      },
      title: {
        text: 'Current Liabilities',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: undefined
        }
      }
    },
    series: [
      {
        name: 'Current Liabilities',
        data: currentLiabilitiesData.map((item) => item.value / 1000000).reverse()
      }
    ]
  };

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={700} height={500} />
    </div>
  );
};

export default CurrentLiabilitiesChart;