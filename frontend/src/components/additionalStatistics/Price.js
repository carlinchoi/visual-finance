import { useSelector } from 'react-redux';

const Price = () => {
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h3 style={{ textAlign: 'center' }}>Market Data</h3>
      {stockDataPrice?.map((item) => {
        const earningsData = twelveEarningsData[4]?.earnings || [];
        const nextEarningsDate = earningsData[4]?.date || 'Data Not Available';

        return (
          <div key={item.ticker}>
            <div>
              <strong>EPS Estimate:</strong> {nextEarningsDate?.eps_estimate ?? 'N/A'}
            </div>
            <div>
              <strong>EPS Actual:</strong> {nextEarningsDate?.eps_actual ?? 'N/A'}
            </div>
            <div>
              <strong>Previous Close Price:</strong> ${item['previous_close_price']}{' '}
            </div>
            <div>
              <strong>52-Week High:</strong> ${item['52_week_high']}
            </div>
            <div>
              <strong>52-Week Low:</strong> ${item['52_week_low']}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Price;
