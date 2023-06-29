import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';
import { fetchStockDividends } from '../../store/reducers/stockDividendsReducer';

const DividendsChart = () => {
  const dispatch = useDispatch();
  const stockDividendsData = useSelector((state) => state.stockDividends.stockDividendsData);
  const loading = useSelector((state) => state.stockDividends.loading);
  const error = useSelector((state) => state.stockDividends.error);
  const searchTickerInput = useSelector((state) => state.stockDividends.searchTicker);

  useEffect(() => {
    if (searchTickerInput) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/dividends?ticker=${searchTickerInput}`);
          const data = await response.json();

          dispatch(fetchStockDividends(data));
        } catch (error) {
          console.error('Error fetching Dividend data:', error);
        }
      };

      fetchData();
    }
  }, [searchTickerInput, dispatch]);

  if (loading) {
    return <div>Loading...has no dividend data to display</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const dividendData = stockDividendsData
    .filter((item) => item.fiscal_period !== 'TTM' && item.fiscal_period !== 'FY')
    .map((item) => ({
      quarter: item.fiscal_period || 'N/A',
      year: item.fiscal_year || 'N/A',
      value: item.financials?.income_statement?.revenues?.value || 0
    }));

  const chartData = {
    options: {
      xaxis: {
        categories: dividendData.map((item) => `${item.year} ${item.quarter}`).reverse()
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
        data: dividendData.map((item) => item.value / 1000000).reverse()
      }
    ]
  };

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={700} height={500} />
    </div>
  );
};

export default DividendsChart;
