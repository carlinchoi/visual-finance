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
      <h3 style={{ textAlign: 'center', borderBottom: '1px dashed #ccc' }}>Market Data</h3>
      {stockDataPrice?.map((item) => {
        const earningsData = twelveEarningsData[4]?.earnings || [];
        const nextEarningsDate = earningsData[4]?.date || 'Data Not Available';

        return (
          <div key={item.ticker}>
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ textAlign: 'left' }}>EPS Estimate:</strong>
              <span style={{ textAlign: 'right' }}>{nextEarningsDate?.eps_estimate ?? 'N/A'}</span>
            </div>
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ textAlign: 'left' }}>EPS Actual:</strong>
              <span style={{ textAlign: 'right' }}>{nextEarningsDate?.eps_actual ?? 'N/A'}</span>
            </div>
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ textAlign: 'left' }}>Previous Close Price:</strong>
              <span style={{ textAlign: 'right' }}>${item['previous_close_price']}</span>
            </div>
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ textAlign: 'left' }}>52-Week High:</strong>
              <span style={{ textAlign: 'right' }}>${item['52_week_high']}</span>
            </div>
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ textAlign: 'left' }}>52-Week Low:</strong>
              <span style={{ textAlign: 'right' }}>${item['52_week_low']}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Price;
