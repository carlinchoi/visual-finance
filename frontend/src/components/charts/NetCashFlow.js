import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

const NetCashFlowChart = () => {
  const financialStatementData = useSelector((state) => state.financialStatement.financialStatementData);

  if (financialStatementData.length === 0) {
    return <div>Loading...</div>;
  }

  const filteredData = financialStatementData.filter((item) => item.fiscal_period !== 'TTM' && item.fiscal_period !== 'FY');

  const chartData = {
    options: {
      xaxis: {
        categories: filteredData.map((item) => `${item.fiscal_year} ${item.fiscal_period}`).reverse()
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
        text: 'Net Cash Flow',
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
        name: 'Net Cash Flow',
        data: filteredData.map((item) => item.financials.cash_flow_statement?.net_cash_flow?.value || 0).reverse()
      }
    ]
  };

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={700} height={500} />
    </div>
  );
};

export default NetCashFlowChart;
