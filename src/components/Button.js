import React, {useState} from "react";

function ButtonClick(){
   const newdata=[{
        date :"",
        description :"",
        category :"",
        amount :""
    }]
    const [addTransaction,setaddTransaction] = useState("")

    function ButtonClick(){
       console.log("added");
       

    }
    return(
        <div className="d-grid gap-2 col-2 mx-auto">
        <button type="button" className="btn btn-secondary" onClick={ButtonClick}>Add Transaction</button>
        </div>
    )

}

export default ButtonClick