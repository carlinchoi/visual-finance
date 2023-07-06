import { useSelector } from 'react-redux';

const Statistics = () => {
  const stockDataPrice = useSelector((state) => state.stockDataPrice.stockDataPrice);
  const twelveEarningsData = useSelector((state) => state.twelveData.twelveEarnings);
  const loading = useSelector((state) => state.stockDataPrice.loading);
  const error = useSelector((state) => state.stockDataPrice.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
      {stockDataPrice?.map((item) => {
        const earningsData = twelveEarningsData[4]?.earnings || [];
        const nextEarningsDate = earningsData[4]?.date || 'Data Not Available';

        return (
          <div key={item.ticker} style={{ marginTop: '25px' }}>
            <div>EPS Estimate: {nextEarningsDate?.eps_estimate ?? 'N/A'}</div>
            <div>EPS Actual: {nextEarningsDate?.eps_actual ?? 'N/A'}</div>
            <div>Previous Close Price: {item['previous_close_price']} </div>
            <div>52-Week High: {item['52_week_high']}</div>
            <div>52-Week Low: {item['52_week_low']}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
