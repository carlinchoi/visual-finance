import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTwelveIndices } from 'store/actions/twelveDataActions';
import axios from 'boot/axios';
import { Box, Typography, Divider } from '@mui/material';
import NasdaqLogo from 'assets/images/icons/nasdaq-100--600.png';
import DowJonesLogo from 'assets/images/icons/dow-30--600.png';
import SP500Logo from 'assets/images/icons/s-and-p-500--600.png';

const TwelveIndices = () => {
  const dispatch = useDispatch();
  const twelveIndicesData = useSelector((state) => state.twelveData.twelveIndices);
  const loading = useSelector((state) => state.twelveData.loading);
  const error = useSelector((state) => state.twelveData.error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSPX = await axios.get('twelve-indices?symbol=SPX');
        const responseNDX = await axios.get('twelve-indices?symbol=NDX');
        const responseDJI = await axios.get('twelve-indices?symbol=DJI');
        const responseData = [responseSPX.data, responseNDX.data, responseDJI.data];
        dispatch(fetchTwelveIndices(responseData));
        console.log(responseData);
      } catch (error) {
        console.error('Error fetching Indices Data:', error);
        // You can also dispatch an action here to handle the error in Redux state.
      }
    };

    // Include 'dispatch' in the dependency array
    fetchData();
  }, [dispatch]); // 'dispatch' is now a dependency

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
      {twelveIndicesData.map((data, index) => (
        <React.Fragment key={index}>
          {getIndexLogo(data[0].symbol) && (
            <Box mx={1}>
              <img src={getIndexLogo(data[0].symbol)} alt={data[0].symbol} height={35} style={{ marginTop: '5px' }} />
            </Box>
          )}
          <Box textAlign="left" marginRight="10px">
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {formatIndexName(data[0].symbol)}
            </Typography>
            <Typography textAlign="left">
              ${`${data[0].open.toFixed(2)}`}
              <span style={{ color: data[0].percent_change >= 0 ? 'green' : 'red', marginLeft: '10px' }}>
                {`${data[0].percent_change.toFixed(2)}%`}
              </span>
            </Typography>
          </Box>
          {index !== twelveIndicesData.length - 1 && <Divider orientation="vertical" flexItem />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default TwelveIndices;
