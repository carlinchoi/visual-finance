import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIndicesData } from 'store/actions/IndicesDataActions';
import axios from 'boot/axios';
import { Box, Typography, Divider } from '@mui/material';

const Indices = () => {
  const dispatch = useDispatch();
  const indicesData = useSelector((state) => state.indicesData.indicesData);
  const loading = useSelector((state) => state.indicesData.loading);
  const error = useSelector((state) => state.indicesData.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseDJI = await axios.get('http://localhost:8080/indices?symbol=DJI');
        const responseNDX = await axios.get('http://localhost:8080/indices?symbol=NDX');
        const responseSPX = await axios.get('http://localhost:8080/indices?symbol=SPX');
        dispatch(fetchIndicesData([responseDJI.data, responseNDX.data, responseSPX.data]));
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
      case 'DJI':
        return 'Dow Jones';
      case 'NDX':
        return 'NASDAQ 100';
      case 'SPX':
        return 'S&P 500';
      default:
        return '';
    }
  };

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }} display="flex" alignItems="center">
      {indicesData.map((data, index) => (
        <React.Fragment key={index}>
          <Box mx={1} textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {formatIndexName(data.symbol[0])}
            </Typography>
            <Typography>${data.last[0]}</Typography>
          </Box>
          {index !== indicesData.length - 1 && <Divider orientation="vertical" flexItem />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Indices;
