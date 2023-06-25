import React from 'react';
import CurrentLiabilitiesChart from '../../components/CurrentLiabilitiesChart.js';
import RevenueChart from 'components/RevenueChart.js';

const SamplePage = () => {
  return (
    <div>
      <RevenueChart />
      <CurrentLiabilitiesChart />
      
    </div>
  );
};

export default SamplePage;
