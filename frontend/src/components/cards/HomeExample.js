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
        <Grid xs={12} md={6} sx={{ pb: { xs: 5, md: 0 }, pr: { xs: 0, md: 5 } }}>
          <Typography fontSize={28} fontWeight={500} lineHeight={1.2}>
            Analyze your stocks with one click
          </Typography>
          <Typography paddingTop={1} fontSize={18}>
            View stock market value, performance over the last few quarters, and the latest news in the stock market. We unify all aspects
            of your stock market needs into one easy place.
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <img src="/assets/images/icons/visualfront.png" alt="Search Page" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        sx={{
          px: { xs: 3, sm: 5, md: 10, lg: 20 },
          py: 5,
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        <Grid xs={12} md={6} sx={{ pb: { xs: 5, md: 0 }, pr: { xs: 0, md: 5 } }}>
          <img src="/assets/images/icons/portfolio.png" alt="Portfolio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid xs={12} md={6} sx={{ pb: { xs: 5, md: 0 }, pl: { xs: 0, md: 5 } }}>
          <Typography fontSize={28} fontWeight={500} lineHeight={1.2}>
            Manage Your Portfolio with Ease
          </Typography>
          <Typography paddingTop={1} fontSize={18}>
            Register a new account to keep track of your investments, allocations, and gains with our intuitive portfolio management tools.
            Visualize your portfolio through interactive pie charts.
          </Typography>
        </Grid>
      </Grid>
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
        <Grid xs={12} md={6} sx={{ pb: { xs: 5, md: 0 }, pr: { xs: 0, md: 5 } }}>
          <Typography fontSize={28} fontWeight={500} lineHeight={1.2}>
            Discover Crypto Prices
          </Typography>
          <Typography paddingTop={1} fontSize={18}>
            Stay updated on cryptocurrency prices and market trends. Explore the top 100 cryptocurrencies by market capitalization and make
            informed investment decisions.
          </Typography>
        </Grid>
        {/* Prices Pic */}
        <Grid xs={12} md={6}>
          <img
            src="/assets/images/icons/cryptodash.png"
            alt="Crypto Prices"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeExample;
