import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import MainCard from 'components/MainCard';
import SearchBar from 'components/SearchBar';
import DataPrice from 'components/cards/DataPrice';
import RevenueChart from 'components/charts/Revenue';
import CurrentLiabilitiesChart from 'components/charts/CurrentLiabilities';
import NetCashFlowChart from 'components/charts/NetCashFlow';
import GrossProfitChart from 'components/charts/GrossProfit';
import OperatingExpensesChart from 'components/charts/OperatingExpenses';
import DividendsChart from 'components/charts/Dividends';
import HomeText from 'components/cards/HomeText';

const DashboardDefault = () => {
  const searchTickerInput = useSelector((state) => state.financialStatement.searchTicker);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          {searchTickerInput ? null : <HomeText />}
        </Grid>
      </Grid>
      <Grid item xs={12} md={5} lg={4} sx={{ maxWidth: 800 }}>
        <Grid container justifyContent="center">
          <MainCard sx={{ mt: 2 }}>
            <SearchBar />
          </MainCard>
        </Grid>
      </Grid>
      {searchTickerInput && (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={5} lg={4} sx={{ maxWidth: 800 }}>
            <DataPrice />
          </Grid>
        </Grid>
      )}
      {searchTickerInput && (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={5} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <RevenueChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <CurrentLiabilitiesChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <NetCashFlowChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <GrossProfitChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <OperatingExpensesChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <DividendsChart />
            </MainCard>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default DashboardDefault;
