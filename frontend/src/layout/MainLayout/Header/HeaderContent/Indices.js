import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIndicesData } from 'store/actions/IndicesDataActions';
import axios from 'boot/axios';
import { Box, Typography, Divider } from '@mui/material';
import NasdaqLogo from 'assets/images/icons/nasdaq-100--600.png';
import DowJonesLogo from 'assets/images/icons/dow-30--600.png';
import SP500Logo from 'assets/images/icons/s-and-p-500--600.png';

const Indices = () => {
  const dispatch = useDispatch();
  const indicesData = useSelector((state) => state.indicesData.indicesData);
  const loading = useSelector((state) => state.indicesData.loading);
  const error = useSelector((state) => state.indicesData.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const responseSPX = await fetch('https://d2ejg0bxx4cbj9.cloudfront.net/indices?symbol=SPX');
        const responseNDX = await axios.get('indices?symbol=NDX');
        const responseDJI = await axios.get('indices?symbol=DJI');
        dispatch(fetchIndicesData([responseSPX.data, responseNDX.data, responseDJI.data]));
      } catch (error) {
        console.error('Error fetching Indices Data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const formatIndexName = (symbol) => {
    switch (symbol) {
      case 'SPX':
        return 'S&P 500';
      case 'DJI':
        return 'Dow Jones 30';
      case 'NDX':
        return 'NASDAQ 100';
      default:
        return '';
    }
  };

  const getIndexLogo = (symbol) => {
    switch (symbol) {
      case 'SPX':
        return SP500Logo;
      case 'DJI':
        return DowJonesLogo;
      case 'NDX':
        return NasdaqLogo;

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }} display="flex" alignItems="center">
      {indicesData.map((data, index) => (
        <React.Fragment key={index}>
          {getIndexLogo(data.symbol[0]) && (
            <Box mx={1}>
              <img src={getIndexLogo(data.symbol[0])} alt={data.symbol[0]} height={35} style={{ marginTop: '5px' }} />
            </Box>
          )}
          <Box textAlign="left" marginRight="10px">
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {formatIndexName(data.symbol[0])}
            </Typography>
            <Typography textAlign="left">${data.last[0]}</Typography>
          </Box>
          {index !== indicesData.length - 1 && <Divider orientation="vertical" flexItem />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Indices;
