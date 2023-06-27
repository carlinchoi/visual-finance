// material-ui
import { Avatar, AvatarGroup, Box, Button, Grid, Stack, Typography } from '@mui/material';

// project import

import MainCard from 'components/MainCard';
import RevenueChart from 'components/charts/Revenue';
import CurrentLiabilitiesChart from 'components/charts/CurrentLiabilities';
import NetCashFlowChart from 'components/charts/NetCashFlow';
import GrossProfitChart from 'components/charts/GrossProfit';
import OperatingExpensesChart from 'components/charts/OperatingExpenses';

// assets
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={5} lg={4}>
        <Grid container justifyContent="center">
          <MainCard sx={{ mt: 2 }}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}></Stack>
            </Box>
            <RevenueChart />
          </MainCard>
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container justifyContent="center">
          <MainCard sx={{ mt: 2 }}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}></Stack>
            </Box>
            <CurrentLiabilitiesChart />
          </MainCard>
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container justifyContent="center">
          <MainCard sx={{ mt: 2 }}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}></Stack>
            </Box>
            <NetCashFlowChart />
          </MainCard>
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container justifyContent="center">
          <MainCard sx={{ mt: 2 }}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}></Stack>
            </Box>
            <OperatingExpensesChart />
          </MainCard>
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container justifyContent="center">
          <MainCard sx={{ mt: 2 }}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}></Stack>
            </Box>
            <GrossProfitChart />
          </MainCard>
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container justifyContent="center">
          <MainCard sx={{ mt: 2 }}>
            <Stack spacing={3}>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Stack>
                    <Typography variant="h5" noWrap>
                      Help & Support Chat
                    </Typography>
                    <Typography variant="caption" color="secondary" noWrap>
                      Typical reply within 24 hours
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
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
