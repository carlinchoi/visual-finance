import React from 'react';
import { Grid } from '@mui/material';
import HomeText from 'components/cards/HomeText';
import SearchBar from 'components/SearchBar';
import MainCard from 'components/MainCard';
import HomeNews from 'components/cards/HomeNews';
import HomeExample from 'components/cards/HomeExample';

const HomePage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '80px' }}>
      <Grid item xs={12}>
        <HomeText />
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <MainCard sx={{ mt: 2 }}>
            <SearchBar />
          </MainCard>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '30px' }}>
        <Grid item xs={5}>
          <HomeNews />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '30px' }}>
        <Grid item xs={12}>
          <HomeExample />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
