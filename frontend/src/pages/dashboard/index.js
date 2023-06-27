// material-ui
import { Avatar, AvatarGroup, Box, Button, Grid, Stack, Typography } from '@mui/material';

// project import

import MainCard from 'components/MainCard';
import RevenueChart from 'components/charts/Revenue';
import CurrentLiabilitiesChart from 'components/charts/CurrentLiabilities';
import NetCashFlowChart from 'components/charts/NetCashFlow';

// assets
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Financial Data</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}></Stack>
          </Box>
          <RevenueChart />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between"></Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}></Stack>
          </Box>
          <CurrentLiabilitiesChart />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between"></Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}></Stack>
          </Box>
          <NetCashFlowChart />
        </MainCard>
      </Grid>

      <MainCard sx={{ mt: 2 }}>
        <Stack spacing={3}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Stack>
                <Typography variant="h5" noWrap>
                  Help & Support Chat
                </Typography>
                <Typography variant="caption" color="secondary" noWrap>
                  Typical replay within 5 min
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                <Avatar alt="Remy Sharp" src={avatar1} />
                <Avatar alt="Travis Howard" src={avatar2} />
                <Avatar alt="Cindy Baker" src={avatar3} />
                <Avatar alt="Agnes Walker" src={avatar4} />
              </AvatarGroup>
            </Grid>
          </Grid>
          <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
            Need Help?
          </Button>
        </Stack>
      </MainCard>
    </Grid>
  );
};

export default DashboardDefault;
