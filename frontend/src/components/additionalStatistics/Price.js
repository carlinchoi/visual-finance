import { useSelector } from 'react-redux';

const Price = () => {
  const stockDataPrice = useSelector((state) => state.stockDataPrice.stockDataPrice);
  const loading = useSelector((state) => state.stockDataPrice.loading);
  const error = useSelector((state) => state.stockDataPrice.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2 style={{ marginBottom: '5px', textAlign: 'left', borderBottom: '1px dashed #ccc' }}>Market Data</h2>
      {stockDataPrice?.map((item) => {
        return (
          <div key={item.ticker}>
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ textAlign: 'left' }}>Previous Close Price:</strong>
              <span style={{ textAlign: 'right' }}>${item['previous_close_price']}</span>
            </div>
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong style={{ textAlign: 'left' }}>52-Week High:</strong>
              <span style={{ textAlign: 'right' }}>${item['52_week_high']}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
