import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import StatsPage from "./pages/StatsPage";

function App() {
  const [selectedMonth, setSelectedMonth] = useState("03"); // Default month is March

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleChange = (event) => {
    const monthIndex = months.indexOf(event.target.value) + 1;
    const formattedMonth = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
    setSelectedMonth(formattedMonth);
  };

  return (
    <Router>
      <div className="App">
        <div className="w-[100vw] h-[100vh]">
          <div className="w-full h-[10%] bg-black p-4 flex items-center gap-10 justify-between">
            <div className="flex w-[40%] h-full gap-10">
              <div className="w-[30%] h-full text-white font-semibold text-3xl flex items-center">
                DASHBOARD
              </div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "w-[20%] h-full flex items-center bg-blue-500 justify-center cursor-pointer rounded-md text-white"
                    : "w-[20%] h-full flex items-center hover:bg-blue-500 justify-center cursor-pointer rounded-md text-white"
                }
              >
                Transaction
              </NavLink>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  isActive
                    ? "w-[20%] h-full flex items-center bg-blue-500 justify-center cursor-pointer rounded-md text-white"
                    : "w-[20%] h-full flex items-center hover:bg-blue-500 justify-center cursor-pointer rounded-md text-white"
                }
              >
                Stats
              </NavLink>
            </div>
            <div className="w-[10%] h-[70%]">
              <select
                id="month-select"
                value={months[parseInt(selectedMonth) - 1]}
                onChange={handleChange}
                className="w-full h-full rounded-md"
              >
                <option value="" disabled>
                  Select a month
                </option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Dashboard selectedMonth={selectedMonth} />} />
            <Route path="/stats" element={<StatsPage selectedMonth={selectedMonth} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
