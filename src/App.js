import React, {useState} from "react";
import './App.css';
import Table from "./components/Table"
import Header from "./components/Header";
import Filter from "./components/Filter";
import ButtonClick from "./components/Button";



function App({details, searchList}){
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction,transactions) => {
    setTransactions([...transactions, newTransaction]);
  };
  

  return (
    <>   
   
    <Header/>
    <Filter/>
    <Table details={details} searchList={searchList}/>
   
   
    
  
      
    </>
  
  );
}

export default App;
