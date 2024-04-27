import React from "react";



function Table({details,searchList}) {
  if (!details) {
    return null; 
  }
  const filteredData = details.filter(detail =>
    detail.date.toLowerCase().includes(searchList.toLowerCase()) ||  detail.description.toLowerCase().includes(searchList.toLowerCase()) ||
    detail.category.toLowerCase().includes(searchList.toLowerCase()) ||  detail.amount.toLowerCase().includes(searchList.toLowerCase())
  );

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
          {filteredData.map((detail, index) => (
            <tr key={index+1}>
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
