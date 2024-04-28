import React from "react";
import './App.css';
import Table from "./components/Table"
import Header from "./components/Header";
import Search from "./components/Search";
import ButtonClick from "./components/AddButton";



function App({ transactions, searchList, onAddTransaction}) {


  return (
    <>   
      <Header/>
      <Search/>
   

    </>
  );
}

export default App;