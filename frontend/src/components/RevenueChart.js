import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';
import { fetchCurrentLiabilities } from '../store/reducers/currentLiabilitiesReducer';

const RevenueChart = () => {
  const dispatch = useDispatch();
  const currentLiabilitiesData = useSelector((state) => state.currentLiabilities.currentLiabilitiesData);
  const loading = useSelector((state) => state.currentLiabilities.loading);
  const error = useSelector((state) => state.currentLiabilities.error);

  useEffect(() => {
    if (currentLiabilitiesData.length === 0) {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/financial-data?ticker=AAPL');
          const data = await response.json();

          dispatch(fetchCurrentLiabilities(data));
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [currentLiabilitiesData, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const revenueData = currentLiabilitiesData.map((item) => ({
    quarter: item.quarter,
    year: item.year,
    value: item.financials.income_statement?.revenues?.value || 0
  }));

  const chartData = {
    options: {
      xaxis: {
        categories: revenueData.map((item) => `${item.quarter} ${item.year}`).reverse(),
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
        text: 'Revenues',
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
        name: 'Revenues',
        data: revenueData.map((item) => item.value / 1000000).reverse()
      }
    ]
  };

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={700} height={500} />
    </div>
  );
};

export default RevenueChart;
