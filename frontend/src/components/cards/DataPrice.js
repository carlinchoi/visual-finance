import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockDataPrice } from '../../store/actions/stockDataPriceActions';
// import { Card, CardContent, Typography } from '@mui/material';

const DataPrice = () => {
  const dispatch = useDispatch();
  const stockDataPrice = useSelector((state) => state.stockDataPrice.stockDataPrice);
  const loading = useSelector((state) => state.financialStatement.loading);
  const error = useSelector((state) => state.financialStatement.error);
  const searchTickerInput = useSelector((state) => state.financialStatement.searchTicker);
  const [apiToken, setApiToken] = useState('');

  useEffect(() => {
    const fetchApiToken = async () => {
      try {
        console.log('Fetching API token...');
        const response = await fetch('http://localhost:8080/api/token');
        const data = await response.json();
        console.log('API token:', data.token);
        setApiToken(data.token);
      } catch (error) {
        console.error('Error fetching API token:', error);
      }
    };

    fetchApiToken();
  }, []);

  useEffect(() => {
    if (searchTickerInput && apiToken) {
      const fetchData = async () => {
        try {
          console.log('Fetching financial data...');
          const response = await fetch(`https://api.stockdata.org/v1/data/quote?symbols=${searchTickerInput}`, {
            headers: {
              Authorization: `Bearer ${apiToken}`
            }
          });
          const data = await response.json();
          console.log('Financial data:', data);

          dispatch(fetchStockDataPrice(data));
        } catch (error) {
          console.error('Error fetching financial data:', error);
        }
      };

      fetchData();
    }
  }, [searchTickerInput, apiToken, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  //   return (
  // <Card>
  //   <CardContent>
  //     {stockDataPrice?.data?.map((item) => (
  //       <div key={item.ticker}>
  //         <Typography variant="h6" gutterBottom>
  //           Ticker: {item.ticker}
  //         </Typography>
  //         <Typography variant="body1">Name: {item.name}</Typography>
  //         <Typography variant="body1">Price: ${item.price}</Typography>
  //         <Typography variant="body1">Market Cap: ${item.market_cap}</Typography>
  //         <Typography variant="body1">52 Week High: ${item['52_week_high']}</Typography>{' '}
  //         <Typography variant="body1">52 Week Low: ${item['52_week_low']}</Typography>
  //         <br />
  //       </div>
  //     ))}
  //   </CardContent>
  // </Card>
  //   );
  // };
  return (
    <div>
      {stockDataPrice?.data?.map((item) => {
        const dollarChange = item.price - item.previous_close_price;
        const percentageChange = (dollarChange / item.previous_close_price) * 100;

        const isPositiveChange = dollarChange >= 0;
        const backgroundColor = isPositiveChange ? '#c9fbd1' : '#fbd1d1';

        return (
          <div key={item.ticker}>
            <h1 style={{ margin: 0 }}>{item.name}</h1>
            <h3 style={{ margin: '0 0 5px 0' }}>{item.ticker} | NASDAQ</h3>
            <h2 style={{ margin: '8px 0 0 0' }}>
              ${item.price}{' '}
              <span style={{ color: isPositiveChange ? 'green' : 'red', marginLeft: '10px', backgroundColor, fontSize: '23.5px' }}>
                ${dollarChange.toFixed(2)} {' | '}
                {isPositiveChange ? '+' : '-'}
                {percentageChange.toFixed(2)}%
              </span>
            </h2>
            <h3 style={{ margin: '0 0 5px 0' }}>Next Earnings:</h3>
          </div>
        );
      })}
    </div>
  );
};
export default DataPrice;
