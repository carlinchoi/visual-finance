import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockDataPrice } from 'store/actions/stockDataPriceActions';
import { fetchTwelveData } from 'store/actions/twelveDataActions';
import axios from 'boot/axios';

const DataPrice = () => {
  const dispatch = useDispatch();
  const stockDataPrice = useSelector((state) => state.stockDataPrice.stockDataPrice);
  const loading = useSelector((state) => state.financialStatement.loading);
  const error = useSelector((state) => state.financialStatement.error);
  const searchTickerInput = useSelector((state) => state.financialStatement.searchTicker);
  const [apiToken, setApiToken] = useState('');
  const twelveData = useSelector((state) => state.twelveData.twelveData);

  useEffect(() => {
    const fetchApiToken = async () => {
      try {
        console.log('Fetching API token...');
        const response = await axios.get('/api/token');
        const data = response.data;
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
          const response = await axios.get(`quote?symbols=${searchTickerInput}`);
          const data = response.data;
          console.log('Financial data:', data);
          dispatch(fetchStockDataPrice(data));

          const twelveResponse = await axios.get(`/logo?symbol=${searchTickerInput}`);
          const twelvedata = twelveResponse.data;
          console.log('Twelve Data:', twelvedata);
          dispatch(fetchTwelveData(twelvedata));
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
    <div>
      {stockDataPrice?.map((item) => {
        const dollarChange = item.price - item.previous_close_price;
        const percentageChange = (dollarChange / item.previous_close_price) * 100;
        const isPositiveChange = dollarChange >= 0;
        const backgroundColor = isPositiveChange ? '#c9fbd1' : '#fbd1d1';

        // Get the corresponding twelvedata object
        const twelvedata = twelveData?.find((data) => data.meta.symbol === item.ticker);
        const logoUrl = twelvedata?.url || '';

        return (
          <div key={item.ticker} style={{ display: 'flex', alignItems: 'center' }}>
            {logoUrl && (
              <img
                src={logoUrl}
                alt={item.ticker}
                onError={(e) => {
                  e.target.src = 'fallback_image_url';
                }}
                style={{ marginRight: '20px', marginBottom: '65px', width: '70px', height: '70px' }}
              />
            )}
            <div>
              <h1 style={{ margin: 0 }}>{item.name}</h1>
              <h3 style={{ margin: '0 0 5px 0' }}>{item.ticker} | NASDAQ</h3>
              <h2 style={{ margin: '8px 0 0 0' }}>
                ${item.price}{' '}
                <span
                  style={{
                    color: isPositiveChange ? 'green' : 'red',
                    marginLeft: '10px',
                    backgroundColor,
                    fontSize: '23.5px'
                  }}
                >
                  ${dollarChange.toFixed(2)} {' | '}
                  {isPositiveChange ? '+' : '-'}
                  {percentageChange.toFixed(2)}%
                </span>
              </h2>
              <h3 style={{ margin: '0 0 5px 0' }}>Next Earnings:</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataPrice;
