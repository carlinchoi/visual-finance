import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

const CurrentLiabilitiesChart = () => {
  const financialStatementData = useSelector((state) => state.currentLiabilities.financialStatementData);

  if (financialStatementData.length === 0) {
    return <div>Loading...</div>;
  }

  const filteredData = financialStatementData.filter((item) => item.fiscal_period !== 'TTM' && item.fiscal_period !== 'FY');

  const chartData = {
    options: {
      xaxis: {
        categories: filteredData.map((item) => `${item.fiscal_year} ${item.fiscal_period}`).reverse(),
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
        text: 'Current Liabilities',
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
        name: 'Current Liabilities',
        data: filteredData.map((item) => item.financials.balance_sheet?.current_liabilities?.value || 0).reverse()
      }
    ]
  };

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={700} height={500} />
    </div>
  );
};

export default CurrentLiabilitiesChart;
