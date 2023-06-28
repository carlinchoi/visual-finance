import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockDataPrice } from '../../store/reducers/stockDataPriceReducer';
import { Card, CardContent, Typography } from '@mui/material';

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
        const response = await fetch('http://localhost:8080/api/token'); // Replace with your backend endpoint to fetch the API token
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

  return (
    <Card>
      <CardContent>
        {stockDataPrice?.data?.map((item) => (
          <div key={item.ticker}>
            <Typography variant="h6" gutterBottom>
              Ticker: {item.ticker}
            </Typography>
            <Typography variant="body1">Name: {item.name}</Typography>
            <Typography variant="body1">Price: ${item.price}</Typography>
            <Typography variant="body1">Market Cap: ${item.market_cap}</Typography>
            <Typography variant="body1">52 Week High: ${item['52_week_high']}</Typography>{' '}
            <Typography variant="body1">52 Week Low: ${item['52_week_low']}</Typography>
            <br />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DataPrice;
