import { useSelector } from 'react-redux';

const Financials = () => {
  const financialStatementData = useSelector((state) => state.financialStatement.financialStatementData);
  const loading = useSelector((state) => state.stockDataPrice.loading);
  const error = useSelector((state) => state.stockDataPrice.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredData = financialStatementData.filter((item) => item.fiscal_period === 'FY');

  // Sort the filtered data by fiscal year in descending order
  const sortedData = filteredData.sort((a, b) => b.fiscal_year - a.fiscal_year);

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {sortedData.map((item) => (
        <div key={item.fiscal_year}>
          <h2 style={{ marginBottom: '5px', textAlign: 'left', borderBottom: '1px dashed #ccc' }}>FY {item.fiscal_year} Financials</h2>
          <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
            <strong style={{ textAlign: 'left' }}> Basic Earnings per Share:</strong>{' '}
            <span style={{ textAlign: 'right' }}> {item.financials?.income_statement?.basic_earnings_per_share?.value || 'N/A'}</span>
          </div>
          <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
            <strong style={{ textAlign: 'left' }}> Revenue:</strong>{' '}
            <span style={{ textAlign: 'right' }}> {formatValues(item.financials?.income_statement?.revenues?.value || 'N/A')}</span>
          </div>
          <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
            <strong style={{ textAlign: 'left' }}> Current Liabilities:</strong>{' '}
            <span style={{ textAlign: 'right' }}> {formatValues(item.financials?.balance_sheet?.current_liabilities?.value || 'N/A')}</span>
          </div>
          <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
            <strong style={{ textAlign: 'left' }}> Net Cash Flow:</strong>{' '}
            <span style={{ textAlign: 'right' }}> {formatValues(item.financials?.cash_flow_statement?.net_cash_flow?.value)}</span>
          </div>
          <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
            <strong style={{ textAlign: 'left' }}> Gross Profit:</strong>{' '}
            <span style={{ textAlign: 'right' }}> {formatValues(item.financials?.income_statement?.gross_profit?.value || 'N/A')}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong style={{ textAlign: 'left' }}> Operating Expenses:</strong>
            <span style={{ textAlign: 'right' }}>
              {formatValues(item.financials?.income_statement?.operating_expenses?.value || 'N/A')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatValues = (value) => {
  if (typeof value !== 'number') {
    return 'N/A';
  }

  if (Math.abs(value) >= 1e9) {
    return `${(value / 1e9).toFixed(2)} billion`;
  }

  if (Math.abs(value) >= 1e6) {
    return `${(value / 1e6).toFixed(2)} million`;
  }

  return value.toString();
};

export default Financials;
