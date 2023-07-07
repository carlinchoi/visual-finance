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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {sortedData.map((item) => (
        <div key={item.fiscal_year}>
          <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{item.fiscal_year} Financials</h3>
          <div>
            <strong> Basic Earnings per Share:</strong> {item.financials?.income_statement?.basic_earnings_per_share?.value || 'N/A'}
          </div>
          <div>
            <strong> Revenue:</strong> {formatValues(item.financials?.income_statement?.revenues?.value || 'N/A')}
          </div>
          <div>
            <strong> Current Liabilities:</strong> {formatValues(item.financials?.balance_sheet?.current_liabilities?.value || 'N/A')}
          </div>
          <div>
            <strong> Net Cash Flow:</strong> {formatValues(item.financials?.cash_flow_statement?.net_cash_flow?.value)}
          </div>
          <div>
            <strong> Gross Profit:</strong> {formatValues(item.financials?.income_statement?.gross_profit?.value || 'N/A')}
          </div>
          <div>
            <strong> Operating Expenses:</strong> {formatValues(item.financials?.income_statement?.operating_expenses?.value || 'N/A')}
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
