import React, { useState } from "react";



function ButtonClick({ onAddTransaction}) {
   
    const [newTransaction, setnewTransaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""

    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setnewTransaction({ ...newTransaction, [name]: value });
      };
      const handleClick = () => {
        onAddTransaction(newTransaction);
        setnewTransaction({
          date: "",
          description: "",
          category: "",
          amount: ""
        });
      };

    return (
        <>
        <div className="input-group mb-3">
    <input  
        type="date"
        className="form-control"
        name="date"
        value={newTransaction.date}
        placeholder="Date"
        onChange={handleChange}
      />
      <input  
        type="text"
        className="form-control"
        name="description"
        value={newTransaction.description}
        placeholder="Description"
        onChange={handleChange}
      />
      <input 
        type="text"
        className="form-control"
        name="category"
        value={newTransaction.category}
        placeholder="Category"
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control"
        name="amount"
        value={newTransaction.amount}
        placeholder="Amount"
        onChange={handleChange}
      />
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
      <button type="button" className="btn btn-secondary " onClick={handleClick}>Add Transaction</button>
      </div>
</>
    );
}

export default ButtonClick;
