import React from "react";

const AllBtn = ({ assendingHandler, dessendingHandler, handleFilterByArea,handleFilterByRegion}) => {
  return (
    <div>
      <div className="allBtn">
        <div className="left">
          <button onClick={assendingHandler}>Ascending</button>
          <button onClick={dessendingHandler}>Descending</button>
        </div>
        <div className="right">
    <form>
      <div className="labelAll">
      <input type="checkbox" onChange={handleFilterByArea} />
      <label>Lithuania Area</label>
      </div>

      <div className="labelAll">
      <input type="checkbox" onChange={handleFilterByRegion} />
      <label>Oceania Region</label>
      </div>
    
    
    </form>
        </div>
      </div>
    </div>
  );
};

export default AllBtn;
