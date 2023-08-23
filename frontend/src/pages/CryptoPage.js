import React from 'react';
import CurrentLiabilitiesChart from '../components/charts/CurrentLiabilities.js';
import RevenueChart from 'components/charts/Revenue.js';
import NetCashFlowChart from 'components/charts/NetCashFlow.js';
import GrossProfitChart from 'components/charts/GrossProfit.js';

const CryptoPage = () => {
  return (
    <div>
      <h1>Testing TESTING TESTIngggg</h1>
      <RevenueChart />
      <CurrentLiabilitiesChart />
      <NetCashFlowChart />
      <GrossProfitChart />
    </div>
  );
};

export default CryptoPage;
