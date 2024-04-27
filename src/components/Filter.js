import React from "react";

function Filter(){
    // const filteredItems = selectedCategory==='all'?  items:items.filter(item => selectedCategory === 'all' || item.category === selectedCategory);
    return(
        <div>
       <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      </form>
        </div>
    )
}
export default Filter