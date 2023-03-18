import React from "react";

const searchForm = ({ searchHandler, search, setSearch }) => {
  return (
    <div>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Search for Countries"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default searchForm;
