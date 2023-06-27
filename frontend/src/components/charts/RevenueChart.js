import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-apexcharts';
import { fetchFinancialStatement } from '../../store/reducers/financialStatementReducer';

const RevenueChart = () => {
  const dispatch = useDispatch();
  const financialStatementData = useSelector((state) => state.financialStatement.financialStatementData);
  const loading = useSelector((state) => state.financialStatement.loading);
  const error = useSelector((state) => state.financialStatement.error);

  useEffect(() => {
    if (financialStatementData.length === 0) {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/financial-data?ticker=AAPL');
          const data = await response.json();

          dispatch(fetchFinancialStatement(data));
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [financialStatementData, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const revenueData = financialStatementData
    .filter((item) => item.fiscal_period !== 'TTM' && item.fiscal_period !== 'FY')
    .map((item) => ({
      quarter: item.fiscal_period || 'N/A',
      year: item.fiscal_year || 'N/A',
      value: item.financials?.income_statement?.revenues?.value || 0
    }));

  const chartData = {
    options: {
      xaxis: {
        categories: revenueData.map((item) => `${item.year} ${item.quarter}`).reverse(),
        title: {
          text: 'Fiscal Year + Fiscal Period'
        }
      },
      yaxis: {
        title: {
          text: 'In Millions'
        },
        labels: {
          formatter: (value) => `${(value / 1000000).toFixed(0)}M`
        }
      },
      title: {
        text: 'Revenues',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: undefined
        }
      }
    },
    series: [
      {
        name: 'Revenues',
        data: revenueData.map((item) => item.value / 1000000).reverse()
      }
    ]
  };
  console.log(financialStatementData);

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={700} height={500} />
    </div>
  );
};

export default RevenueChart;
