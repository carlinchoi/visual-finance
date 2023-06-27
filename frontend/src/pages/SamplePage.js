import React from 'react';
import CurrentLiabilitiesChart from '../components/charts/CurrentLiabilities.js';
import RevenueChart from 'components/charts/Revenue.js';
import NetCashFlowChart from 'components/charts/NetCashFlow.js';

const SamplePage = () => {
  return (
    <div>
      <RevenueChart />
      <CurrentLiabilitiesChart />
      <NetCashFlowChart />
    </div>
  );
};

export default SamplePage;
