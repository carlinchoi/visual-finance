import React from 'react';
import CurrentLiabilitiesChart from '../components/charts/CurrentLiabilitiesChart.js';
import RevenueChart from 'components/charts/RevenueChart.js';

const SamplePage = () => {
  return (
    <div>
      <RevenueChart />
      <CurrentLiabilitiesChart />
    </div>
  );
};

export default SamplePage;
