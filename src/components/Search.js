import React, {useState} from "react";
import Table from "./Table";
import ButtonClick from "./AddButton";


function Search(){
  const [transactions, setTransactions] = useState([]);

  const handleNewData = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const onAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  const [details] = useState ([
    {
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: "1000"
    },
    {
      date: "2019-12-01",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: "-10.55"
    },
    {
      date: "2019-12-02",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: "-10.55"
    },
    {
      date: "2019-12-04",
      description: "Sunglasses, Urban Outfitters",
      category: "Fashion",
      amount: "-24.99"
    },
    {
      date: "2019-12-06",
      description: "Venmo Alicn Pays you for Burrito",
      category: "Food",
      amount: "8.75"
    },
    {
      date: "2019-12-06",
      description: "Chipotle",
      category: "Food",
      amount: "-17.59"
    }
  ]);


  const [searchList, setSearchList]= useState("")

  function HandleSearchChange(event){
    setSearchList(event.target.value)
}

    return(
        <div>
       <form className="d-flex" role="search">
        <input
         className="form-control me-2"
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          value={searchList}
          onChange={HandleSearchChange}></input>   
           
      </form>
      <ButtonClick handleNewData={handleNewData} onAddTransaction={onAddTransaction} />

      <Table details={details} searchList={searchList}/>

        </div>
    )
}
export default Search