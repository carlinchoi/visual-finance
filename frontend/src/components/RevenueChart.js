import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';
import { fetchCurrentLiabilities } from '../store/reducers/currentLiabilitiesReducer';

const RevenueChart = () => {
  const dispatch = useDispatch();
  const [revenueData, setRevenueData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Access the revenue data from the Redux store
  const currentLiabilitiesData = useSelector((state) => state.currentLiabilities.currentLiabilitiesData);

  useEffect(() => {
    if (currentLiabilitiesData.length > 0) {
      // Process the revenue data
      const revenues = currentLiabilitiesData.map((item) => ({
        quarter: item.quarter,
        year: item.year,
        value: item.financials.income_statement.revenues.value
      }));

      setRevenueData(revenues);
      setLoading(false);
    }
  }, [currentLiabilitiesData]);

  // Fetch current liabilities data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/financial-data?ticker=AAPL');
        const data = await response.json();

        // Filter and extract current liabilities data for each quarter
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

        // Dispatch the action to update the store
        dispatch(fetchCurrentLiabilities(currentLiabilities));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
