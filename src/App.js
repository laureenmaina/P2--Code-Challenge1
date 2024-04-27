import React from "react";
import './App.css';
import Table from "./components/Table"
import Header from "./components/Header";
import Filter from "./components/Filter";
import Inputs from "./components/Inputs";
import ButtonClick from "./components/Button";


function App() {
  return (
    <>   
   
    <Header/>
     <Inputs />
    <ButtonClick />
    <Filter/>
    <Table />
   
    
   
      
    </>
  
  );
}

export default App;
