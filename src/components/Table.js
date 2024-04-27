import React from "react";

function Table() {
  const details = [
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
  ];

  return (
    <div>
      <table className="table table-bordered 3px solid text-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.date}</td>
              <td>{detail.description}</td>
              <td>{detail.category}</td>
              <td>{detail.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
