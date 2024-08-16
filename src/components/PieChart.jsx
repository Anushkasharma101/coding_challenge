// piechart.jsx
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
};

const PieChart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "My Dataset",
        data: [],
        backgroundColor: [],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://assignment-backend-e1ce.onrender.com/api/pie-chart?month=${selectedMonth}`
        );
        const data = await response.json();

        // Transform the data into the format required by Chart.js
        const labels = data.map((item) => item._id);
        const datasetData = data.map((item) => item.count);
        const backgroundColors = [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
        ];

        // Update the state with the fetched data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Item Counts",
              data: datasetData,
              backgroundColor: backgroundColors.slice(0, labels.length), // Ensure there are enough colors
              hoverOffset: 4,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      }
    };
    if (selectedMonth) {
      fetchData();
    }
  }, [selectedMonth]);

  return (
    <div className="w-full h-full">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
