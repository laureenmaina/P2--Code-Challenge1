import React from "react";
import './App.css';
import Table from "./components/Table"
import Header from "./components/Header";
import Search from "./components/Search";



function App({ details, searchList, newTransaction }) {


  return (
    <>   
      <Header/>
      <Search/>
       <Table details={details} searchList={searchList} newTransaction={newTransaction}/>
    </>
  );
}

export default App;
