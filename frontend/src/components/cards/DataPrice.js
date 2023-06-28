import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockDataPrice } from '../../store/reducers/stockDataPriceReducer';
import { Card, CardContent, Typography } from '@mui/material';

const DataPrice = () => {
  const dispatch = useDispatch();
  const stockDataPrice = useSelector((state) => state.stockDataPrice.stockDataPrice);
  const loading = useSelector((state) => state.financialStatement.loading);
  const error = useSelector((state) => state.financialStatement.error);
  const searchTickerInput = useSelector((state) => state.financialStatement.searchTicker);

  useEffect(() => {
    if (searchTickerInput) {
      const fetchData = async () => {
        try {
          console.log('Fetching financial data...');
          const response = await fetch(` https://api.stockdata.org/v1/data/quote?symbols=${searchTickerInput}&api_token=S3nvQTA2exbOPxsRjTKy00OUpUCPfNlfSXhgiJOz`);
          const data = await response.json();
          console.log('Financial data:', data);

          dispatch(fetchStockDataPrice(data));
        } catch (error) {
          console.error('Error fetching financial data:', error);
        }
      };

      fetchData();
    }
  }, [searchTickerInput, dispatch]);

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
            <Typography variant="body1">Price: {item.price}</Typography>
            <Typography variant="body1">Market Cap: {item.market_cap}</Typography> {/* Use 'market_cap' instead of 'marketCap' */}
            <Typography variant="body1">52 Week High: {item['52_week_high']}</Typography> {/* Use '52_week_high' instead of 'yearlyHigh' */}
            <Typography variant="body1">52 Week Low: {item['52_week_low']}</Typography> {/* Use '52_week_low' instead of 'yearlyLow' */}
            <br />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DataPrice;
