import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

const CurrentLiabilitiesChart = () => {
  const currentLiabilitiesData = useSelector((state) => state.currentLiabilities.currentLiabilitiesData);

  if (currentLiabilitiesData.length === 0) {
    return <div>Loading...</div>;
  }

  const chartData = {
    options: {
      xaxis: {
        categories: currentLiabilitiesData.map((item) => `${item.quarter} ${item.year}`).reverse(),
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
        data: currentLiabilitiesData.map((item) => item.financials.balance_sheet?.current_liabilities?.value || 0).reverse()
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
