import React from "react";
import './App.css';
import Table from "./components/Table"
import Header from "./components/Header";
import Filter from "./components/Filter";
import Inputs from "./components/Inputs";


function App() {
  return (
    <>   
   
    <Header/>
    <Filter/>
    <Inputs />
    <Table />
   
    
   
      
    </>
  
  );
}

export default App;
