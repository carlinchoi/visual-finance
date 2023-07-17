import React from 'react';
import { Grid } from '@mui/material';
import HomeText from 'components/cards/HomeText';
import SearchBar from 'components/SearchBar';
import MainCard from 'components/MainCard';

const HomePage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '80px' }}>
      <Grid item xs={12}>
        <HomeText />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <MainCard sx={{ mt: 2 }}>
          <Grid container justifyContent="center">
            <SearchBar />
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default HomePage;
