import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinData } from 'store/actions/coinGeckoActions';

const CryptoPage = () => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coinData.coinData);
  const loading = useSelector((state) => state.coinData.loading);
  const error = useSelector((state) => state.coinData.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://d2ejg0bxx4cbj9.cloudfront.net/coins');
        const data = await response.json();
        dispatch(fetchCoinData(data));
      } catch (error) {
        console.error('Error fetching Cryptocurrency data: ', error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Crypto Page</h1>
      {coinData.map((coin) => (
        <div key={coin.symbol}>
          <h2>{coin.name}</h2>
          <p>Symbol: {coin.symbol}</p>
          <p>Market Cap: {coin.market_cap}</p>
          <p>Total Volume: {coin.total_volume}</p>
          <p>High 24h: {coin.high_24h}</p>
          <p>Low 24h: {coin.low_24h}</p>
          <p>Price Change 24h: {coin.price_change_percentage_24h}%</p>
          <p>Circulating Supply: {coin.circulating_supply}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoPage;
