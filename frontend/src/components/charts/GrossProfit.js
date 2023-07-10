import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

const GrossProfitChart = () => {
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
          text: 'In Millions',
          align: 'center',
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: undefined
          }
        },
        labels: {
          formatter: (value) => `${(value / 1000000).toFixed(0)}M`
        }
      },
      title: {
        text: 'Gross Profit',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: undefined
        }
      },
      colors: ['#2EE302']
    },
    series: [
      {
        name: 'Gross Profit',
        data: filteredData.map((item) => item.financials.income_statement?.gross_profit?.value || 0).reverse()
      }
    ]
  };

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={700} height={500} />
    </div>
  );
};

export default GrossProfitChart;
