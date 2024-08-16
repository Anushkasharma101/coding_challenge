import React, { useState, useEffect } from "react";
import TransactionTable from "../components/TransactionTable";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";

const Dashboard = ({ selectedMonth }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [finalsearchQuery, setfinalSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        console.log(finalsearchQuery);
        const response = await axios.get(
          `https://assignment-backend-e1ce.onrender.com/api/transactions?page=${currentPage}&perPage=10&month=${selectedMonth}&search=${finalsearchQuery}`
        );
        const data = await response.data;
        console.log(selectedMonth, searchQuery,data);
        setTransactions(data.products);
        console.log(data.total);
        setMaxPages(data.total);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTransactions();
    setIsSearching(false);
  }, [selectedMonth,currentPage,isSearching]);

  const searchTextHandler = (text)=>{
    let searchText = "";
    for(let i=0;i<text.length;i++) {
      if(text[i]===' '){
        
        searchText = searchText + '%20';
      }else{
        searchText = searchText + text[i];
      }
    }
    console.log(searchText);
    
    setfinalSearchQuery(searchText); 
  }

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
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[90%] p-10">
      <div className="w-[17%] h-[5%] border-2 rounded-md border-gray-400 flex p-1 items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e)=>{searchTextHandler(e.target.value);setSearchQuery(e.target.value)}}
          className="w-[90%] h-full"
        />
        <img src="/Assets/search.png" onClick={()=>{setIsSearching(true); }} alt="search" className="w-[10%] h-full cursor-pointer" />
      </div>
      <p className="font-bold mt-4"># Transactions for {selectedMonth} </p>
      <div className="w-full h-[65%] mt-4">
        <TransactionTable transactions={transactions} />
      </div>
      <div className="w-full h-[10%] flex justify-center items-center p-">
      {currentPage > 1 && <div onClick={()=>{setCurrentPage((prev)=> prev-1)}}> Prev </div>}
       <p>{currentPage}</p>
       <p>-</p>
       <p>{Math.ceil(maxPages/10)}</p>
       {currentPage < (Math.ceil(maxPages/10)) && <div onClick={()=>{setCurrentPage((prev)=> prev+1)}}> Next </div>}
      </div>
    </div>
  );
};

export default Dashboard;
