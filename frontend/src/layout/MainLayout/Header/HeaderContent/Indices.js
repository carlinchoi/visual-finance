import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIndicesData } from 'store/actions/IndicesDataActions';
import axios from 'boot/axios';
import { Box, Typography } from '@mui/material';

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
        return 'Dow Jones Industrial Average';
      case 'NDX':
        return 'NASDAQ 100 Index';
      case 'SPX':
        return 'S&P 500 Index';
      default:
        return '';
    }
  };

  return (
    <Box display="flex" alignItems="center">
      {indicesData.map((data, index) => (
        <Box key={index} mx={1} textAlign="center">
          <Typography variant="h6">{formatIndexName(data.symbol[0])}</Typography>
          <Typography>Last: {data.last[0]} USD</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Indices;
