import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InteractiveChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch the JSON data dynamically from the public folder
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/prediction.json'); // Fetch prediction.json from the public folder
        const data = await response.json();

        const labels = data.map(entry => entry.date); // Assuming each entry has a 'date' field
        const cases = data.map(entry => entry.cases); // Assuming each entry has a 'cases' field

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Cases over Time',
              data: cases,
              borderColor: '#757FB2',
              backgroundColor: '#757FB2',
              fill: true,
              tension: 0.4 // Makes the line curved
            }
          ]
        });
        setLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        console.error('Error fetching the prediction data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Covid-19 Trend OverTime',
        font: {
            size: 50, 
            
          }
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Cases',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='graph-div' style={{ width: '1000px', height: '600px' }}> {/* Adjust size here */}
      {loading ? <p>Loading chart...</p> : <Line data={chartData} options={options} />}
    </div>
  );
};

export default InteractiveChart;
