import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import StatisticsBox from "../components/StatisticsBox";
import { Hourglass } from 'react-loader-spinner'; 

const StatsPage = ({selectedMonth}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[90%] flex justify-center items-center">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[90%] p-10 overflow-hidden">
      <p className="font-bold text-xl mb-4">{selectedMonth || "All"} Stats</p>
      <div className="w-full h-[95%] flex gap-[7%]">
        <div className="flex h-full w-[50%] gap-[5%] flex-col">
          <div className="w-full h-[30%]">
            <StatisticsBox selectedMonth={selectedMonth}/>
          </div>
          <div className="w-[100%] h-[70%]">
            <BarChart selectedMonth={selectedMonth} />
          </div>
        </div>
        <div className="w-[50%] h-full">
          <PieChart selectedMonth={selectedMonth}/>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
