import React from 'react';
import { useSelector } from 'react-redux';

const Margins = () => {
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
      <h2 style={{ marginBottom: '5px', textAlign: 'left', borderBottom: '1px dashed #ccc' }}>Margins and Growth</h2>
      {sortedData.map((item, index) => (
        <div key={item.fiscal_year}>
          {index === 0 ? (
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong>Profit Margin: (FY {item.fiscal_year})</strong> {calculateProfitMargin(item)}
            </div>
          ) : (
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong>Profit Margin (FY {item.fiscal_year}):</strong> {calculateProfitMargin(item)}
            </div>
          )}
          {index === 0 ? (
            <div style={{ marginBottom: '5px', borderBottom: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between' }}>
              <strong>Operating Margin: (FY {item.fiscal_year})</strong> {calculateOperatingMargin(item)}
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Operating Margin (FY {item.fiscal_year}):</strong> {calculateOperatingMargin(item)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
const calculateProfitMargin = (item) => {
  const netIncome = item.financials?.income_statement?.net_income_loss?.value;
  const revenue = item.financials?.income_statement?.revenues?.value;

  if (netIncome && revenue) {
    const profitMargin = (netIncome / revenue) * 100;
    return profitMargin.toFixed(2) + '%';
  }

  return 'N/A';
};

const calculateOperatingMargin = (item) => {
  const operatingIncome = item.financials?.income_statement?.operating_income_loss?.value;
  const revenue = item.financials?.income_statement?.revenues?.value;

  if (operatingIncome && revenue) {
    const operatingMargin = (operatingIncome / revenue) * 100;
    return operatingMargin.toFixed(2) + '%';
  }

  return 'N/A';
};

export default Margins;
