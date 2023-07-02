import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';
import { fetchStockDividends } from '../../store/actions/stockDividendsActions';

const DividendsChart = () => {
  const dispatch = useDispatch();
  const stockDividendsData = useSelector((state) => state.stockDividends.stockDividendsData);
  const loading = useSelector((state) => state.stockDividends.loading);
  const error = useSelector((state) => state.stockDividends.error);
  const searchTickerInput = useSelector((state) => state.financialStatement.searchTicker);

  useEffect(() => {
    if (searchTickerInput) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`dividends?ticker=${searchTickerInput}`);
          const data = response.data;
          dispatch(fetchStockDividends(data));
        } catch (error) {
          console.error('Error fetching Dividend data:', error);
        }
      };

      fetchData();
    }
  }, [searchTickerInput, dispatch]);

  if (loading) {
    return <div>`${searchTickerInput}` has no dividend data to display</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const dividendData = stockDividendsData.map((item) => ({
    payDate: item.pay_date || 'N/A',
    value: item.cash_amount || 0
  }));

  const chartData = {
    options: {
      xaxis: {
        categories: dividendData.map((item) => `${item.payDate}`).reverse()
      },
      yaxis: {
        title: {
          text: 'Dividend Amount Paid'
        }
      },
      title: {
        text: 'Dividends',
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
        name: 'Dividends',
        data: dividendData.map((item) => item.value).reverse()
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
