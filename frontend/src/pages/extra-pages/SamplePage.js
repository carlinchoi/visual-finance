import React from 'react';
import TestAxios from '../../components/TestAxios.js';
import MonthlyBarChart from 'pages/dashboard/MonthlyBarChart.js';
const SamplePage = () => {
  return (
    <div>
      {/* Other components */}
      <TestAxios />
      <MonthlyBarChart />
      {/* Other components */}
    </div>
  );
};

export default SamplePage;
