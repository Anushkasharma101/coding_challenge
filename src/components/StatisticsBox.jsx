import React, { useState, useEffect } from "react";

const StatisticsBox = ({selectedMonth}) => {
  const [statistics, setStatistics] = useState({
    
    totalAmount: 0,
    totalItemsSold: 0,
    totalItemsNotSold: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        console.log(selectedMonth);
        const response = await fetch(
          `https://assignment-backend-e1ce.onrender.com/api/statistics?month=${selectedMonth}`
        );
        const data = await response.json();
        setStatistics({
          totalAmount: data.totalAmount,
          totalItemsSold: data.totalItemsSold,
          totalItemsNotSold: data.totalItemsNotSold,
        });
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, [selectedMonth]);

  return (
    <div className="w-full h-full">
      <table className="table-auto border-collapse border border-gray-300 w-full h-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-4 text-center">
              Total Sale
            </th>
            <th className="border border-gray-300 p-4 text-center">
              Total Sold Item
            </th>
            <th className="border border-gray-300 p-4 text-center">
              Total Not Sold Item
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-4 text-center">
              ${statistics.totalAmount.toFixed(2)}
            </td>
            <td className="border border-gray-300 p-4 text-center">
              {statistics.totalItemsSold}
            </td>
            <td className="border border-gray-300 p-4 text-center">
              {statistics.totalItemsNotSold}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsBox;
