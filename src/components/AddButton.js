import React, { useState } from "react";

function ButtonClick({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTransaction(newTransaction);
    setNewTransaction({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="date"
          className="form-control"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Description"
          value={newTransaction.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="form-control"
          name="category"
          placeholder="Category"
          value={newTransaction.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          className="form-control"
          name="amount"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default ButtonClick;