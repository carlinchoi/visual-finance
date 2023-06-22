import React, { useEffect, useState } from 'react';

const FinancialData = () => {
  const [financialData, setFinancialData] = useState(null);

  useEffect(() => {
    fetch('/financial-data?ticker=AAPL')
      .then((response) => response.json())
      .then((data) => {
        setFinancialData(data);
      })
      .catch((error) => {
        console.error('Error fetching financial data:', error);
      });
  }, []);

  if (!financialData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{financialData.company_name}</h2>
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Value</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(financialData.financials).map(([category, items]) => (
            <React.Fragment key={category}>
              <tr>
                <td colSpan="3">{category}</td>
              </tr>
              {Object.values(items).map((item) => (
                <tr key={item.order}>
                  <td>{item.label}</td>
                  <td>{item.value}</td>
                  <td>{item.unit}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialData;
