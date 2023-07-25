import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function HomeExample() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Grid
        container
        alignItems="center"
        sx={{
          px: { xs: 3, sm: 5, md: 10, lg: 20 },
          py: 5,
          backgroundColor: '#ebeff3',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        {/* Dashboard Text */}
        <Grid xs={12} md={6} sx={{ pb: { xs: 5, md: 0 }, pr: { xs: 0, md: 5 } }}>
          <Typography fontSize={28} fontWeight={500} lineHeight={1.2}>
            Discover your crypto overview
          </Typography>
          <Typography paddingTop={1} fontSize={18}>
            View your market value, performance of the top cryptocurrencies, and the latest news in crypto. We unify all aspects of your
            crypto needs into one easy place.
          </Typography>
        </Grid>
        {/* Dashboard Pic */}
        <Grid xs={12} md={6}>
          <img src="/imgs/dashboard.jpeg" alt="Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
      </Grid>

      {/* Wallets */}

      <Grid
        container
        alignItems="center"
        sx={{
          px: { xs: 3, sm: 5, md: 10, lg: 20 },
          py: 5,
          flexDirection: { xs: 'column-reverse', md: 'row' }
        }}
      >
        {/* Wallet Pic */}
        <Grid xs={12} md={6}>
          <img src="/imgs/wallets.jpeg" alt="Wallets" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        {/* Wallet Text */}
        <Grid xs={12} md={6} sx={{ pb: { xs: 5, md: 0 }, pl: { xs: 0, md: 5 } }}>
          <Typography fontSize={28} fontWeight={500} lineHeight={1.2}>
            Portfolio tracking
          </Typography>
          <Typography paddingTop={1} fontSize={18}>
            Sync your wallets with CoinDash to easily access all your wallet balances and transactions in one place. Never lose track of
            your assets again.
          </Typography>
        </Grid>
      </Grid>

      {/* Prices */}

      <Grid
        container
        alignItems="center"
        sx={{
          px: { xs: 3, sm: 5, md: 10, lg: 20 },
          py: 5,
          backgroundColor: '#ebeff3',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        {/* Prices Text */}
        <Grid xs={12} md={6} sx={{ pb: { xs: 5, md: 0 }, pr: { xs: 0, md: 5 } }}>
          <Typography fontSize={28} fontWeight={500} lineHeight={1.2}>
            Discover crypto prices
          </Typography>
          <Typography paddingTop={1} fontSize={18}>
            Be the first to know about price changes on your crypto assets. We list the top 100 cryptocurrencies by marketcap for your
            convenience.
          </Typography>
        </Grid>
        {/* Prices Pic */}
        <Grid xs={12} md={6}>
          <img src="/imgs/prices.jpeg" alt="Prices" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeExample;
