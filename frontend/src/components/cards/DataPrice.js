import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStockDataPrice } from 'store/actions/stockDataPriceActions';
import { fetchTwelveData } from 'store/actions/twelveDataActions';
import axios from 'boot/axios';

const DataPrice = () => {
  const dispatch = useDispatch();
  const stockDataPrice = useSelector((state) => state.stockDataPrice.stockDataPrice);
  const loading = useSelector((state) => state.stockDataPrice.loading);
  const error = useSelector((state) => state.stockDataPrice.error);
  const searchTickerInput = useSelector((state) => state.financialStatement.searchTicker);
  const twelveData = useSelector((state) => state.twelveData.twelveData);

  useEffect(() => {
    if (searchTickerInput) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`quote?symbols=${searchTickerInput}`);
          const data = response.data;
          dispatch(fetchStockDataPrice(data));
          const twelveResponse = await axios.get(`/logo?symbol=${searchTickerInput}`);
          const twelvedata = twelveResponse.data;
          dispatch(fetchTwelveData(twelvedata));
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {stockDataPrice?.map((item) => {
        const dollarChange = item.price - item.previous_close_price;
        const percentageChange = (dollarChange / item.previous_close_price) * 100;
        const isPositiveChange = dollarChange >= 0;
        const backgroundColor = isPositiveChange ? '#c9fbd1' : '#fbd1d1';

        const twelvedata = twelveData?.find((data) => data.meta.symbol === item.ticker);
        const logoUrl = twelvedata?.url || '';

        return (
          <div key={item.ticker} style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
            {logoUrl && (
              <img
                src={logoUrl}
                alt={item.ticker}
                onError={(e) => {
                  e.target.src = 'fallback_image_url';
                }}
                style={{ marginRight: '20px', marginBottom: '105px', width: '100px', height: '100px' }}
              />
            )}
            <div>
              <h1 style={{ margin: '0 0 0 0', fontSize: '38px' }}>{item.name}</h1>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '30px' }}>{item.ticker} | NASDAQ</h3>
              <h2 style={{ margin: '10px 0 0 0', fontSize: '25px' }}>
                ${item.price}{' '}
                <span
                  style={{
                    color: isPositiveChange ? 'green' : 'red',
                    marginLeft: '10px',
                    backgroundColor,
                    fontSize: '24px'
                  }}
                >
                  ${dollarChange.toFixed(2)} {' | '}
                  {isPositiveChange ? '+' : '-'}
                  {percentageChange.toFixed(2)}%
                </span>
              </h2>
              <h3 style={{ margin: '0 0 20px 0', fontSize: '26px' }}>Next Earnings:</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataPrice;
