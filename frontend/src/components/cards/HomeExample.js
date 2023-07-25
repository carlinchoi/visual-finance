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
            Analyze your stocks with one click
          </Typography>
          <Typography paddingTop={1} fontSize={18}>
            View stock market value, performance over the last few quarters, and the latest news in the stock market. We unify all aspects
            of your stock market needs into one easy place.
          </Typography>
        </Grid>
        {/* Dashboard Pic */}
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
          flexDirection: { xs: 'column-reverse', md: 'row' }
        }}
      >
        <Grid xs={12} md={6}>
          <img src="/imgs/wallets.jpeg" alt="Portfolio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid xs={12} md={6} sx={{ pb: { xs: 5, md: 0 }, pl: { xs: 0, md: 5 } }}>
          <Typography fontSize={28} fontWeight={500} lineHeight={1.2}>
            Portfolio tracking
          </Typography>
          <Typography paddingTop={1} fontSize={18}>
            Coming soon...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeExample;