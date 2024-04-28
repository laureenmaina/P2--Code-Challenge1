// import React,{useState} from "react";
// import ButtonClick from "./AddButton";
// import Table from "./Table";


// function Form({searchList,newTransaction}){
//     const [transactions, setTransactions] = useState([]);

//     const handleNewData = (newTransaction) => {
//       setTransactions([...transactions, newTransaction]);
//     };
  
//     const onAddTransaction = (newTransaction) => {
//       setTransactions([...transactions, newTransaction]);
//     };
//     const [details] = useState ([
//       {
//         date: "2019-12-01",
//         description: "Paycheck from Bob's Burgers",
//         category: "Income",
//         amount: "1000"
//       },
//       {
//         date: "2019-12-01",
//         description: "South by Southwest Quinoa Bowl at Fresh & Co",
//         category: "Food",
//         amount: "-10.55"
//       },
//       {
//         date: "2019-12-02",
//         description: "South by Southwest Quinoa Bowl at Fresh & Co",
//         category: "Food",
//         amount: "-10.55"
//       },
//       {
//         date: "2019-12-04",
//         description: "Sunglasses, Urban Outfitters",
//         category: "Fashion",
//         amount: "-24.99"
//       },
//       {
//         date: "2019-12-06",
//         description: "Venmo Alicn Pays you for Burrito",
//         category: "Food",
//         amount: "8.75"
//       },
//       {
//         date: "2019-12-06",
//         description: "Chipotle",
//         category: "Food",
//         amount: "-17.59"
//       }
//     ]);
//     return(
//         <div>


//          <ButtonClick handleNewData={handleNewData} onAddTransaction={onAddTransaction} />
//          <Table details={details} searchList={searchList} newTransaction={newTransaction}/>
            
//         </div>

//     )
// }

// export default Form