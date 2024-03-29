import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Divider } from '@mui/material';
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
import HomeNews from 'components/cards/HomeNews';
import Price from 'components/additionalStatistics/Price';
import Financials from 'components/additionalStatistics/Financials';
import Margins from 'components/additionalStatistics/Margins';

const DashboardDefault = () => {
  const searchTickerInput = useSelector((state) => state.financialStatement.searchTicker);

  return (
    <Grid container justifyContent="center" alignItems="center">
      {!searchTickerInput && (
        <div>
          <Grid item xs={12}>
            <HomeText />
          </Grid>
        </div>
      )}
      ;
      <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <MainCard sx={{ mt: 2 }}>
            <SearchBar />
          </MainCard>
        </Grid>
      </Grid>
      {!searchTickerInput && (
        <div>
          <Grid container justifyContent="center" style={{ marginTop: '30px' }}>
            <Grid item xs={5}>
              <HomeNews />
            </Grid>
          </Grid>
        </div>
      )}
      ;
      {searchTickerInput && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={5} lg={4}>
            <DataPrice />
          </Grid>
        </Grid>
      )}
      {searchTickerInput && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8} lg={8}>
            <MainCard>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Price />
                </Grid>
                <Grid item xs={0} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Divider orientation="vertical" flexItem variant="middle" sx={{ height: '100%' }} />
                </Grid>
                <Grid item xs={4}>
                  <Financials />
                </Grid>
                <Grid item xs={0} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Divider orientation="vertical" flexItem variant="middle" sx={{ height: '100%' }} />
                </Grid>
                <Grid item xs={3.5}>
                  <Margins />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      )}
      {searchTickerInput && (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={12} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <RevenueChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <CurrentLiabilitiesChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <NetCashFlowChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <GrossProfitChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <MainCard sx={{ mt: 2 }}>
              <OperatingExpensesChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
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
