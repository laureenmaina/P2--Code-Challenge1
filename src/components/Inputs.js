import React from "react";


function Inputs() {

  
    return (
        <>
        <div className="input-group mb-3">
            <input type="date" className="form-control" placeholder="Date"/>
            <input type="text" className="form-control" placeholder="Description" />
            <input type="text" className="form-control" placeholder="Category"/>
            <input type="text" className="form-control" placeholder="Amount"/>
          </div>
          <div class="d-grid gap-2 col-2 mx-auto">
          <button type="button" className="btn btn-secondary">Add Transaction</button>
          </div>
      </>
    );
}
      
export default Inputs;

