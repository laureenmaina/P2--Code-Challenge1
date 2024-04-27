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
        
      </>
    );
}
      
export default Inputs;

