import React from "react";

const AllBtn = ({ assendingHandler, dessendingHandler, filterBy }) => {
  return (
    <div>
      <div className="allBtn">
        <div className="left">
          <button onClick={assendingHandler}>Ascending</button>
          <button onClick={dessendingHandler}>Descending</button>
        </div>
        <div className="right">
          <button onClick={filterBy}>
            Filters By Lithuania Area & Oceania Region{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBtn;
