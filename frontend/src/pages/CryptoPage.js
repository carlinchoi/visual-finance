import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinData } from 'store/actions/coinGeckoActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper'; // Import Paper here

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
    <TableContainer component={Paper} sx={{ pt: 2, mb: 5 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Coin</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">High 24h</TableCell>
            <TableCell align="right">Low 24h</TableCell>
            <TableCell align="right">Price Change 24h</TableCell>
            <TableCell align="right">Circulating Supply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinData.map((coin) => (
            <TableRow
              key={coin.market_cap_rank}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0
                }
              }}
            >
              <TableCell>{coin.market_cap_rank}</TableCell>
              <TableCell>
                <Card elevation={0}>
                  <CardHeader
                    avatar={<Avatar alt="CoinLogo" src={coin.image} />}
                    title={coin.symbol}
                    subheader={coin.name}
                    sx={{ padding: 0 }}
                  />
                </Card>
              </TableCell>
              <TableCell align="right">{coin.current_price}</TableCell>
              <TableCell align="right">
                {coin.price_change_percentage_24h ? coin.price_change_percentage_24h.toFixed(2) + '%' : 'N/A'}
              </TableCell>
              <TableCell align="right">{coin.total_volume}</TableCell>
              <TableCell align="right">{coin.market_cap}</TableCell>
              <TableCell align="right">{coin.circulating_supply}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoPage;
