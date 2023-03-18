import React from "react";

const fetchCountries = ({ currentPosts }) => {
  return (
    <div>
      <div className="fetchCountries">
        {currentPosts.map((countries, index) => {
          return (
            <div className="country" key={countries.name}>
              <h2>Country - {countries.name}</h2>
              <h3>Region - {countries.region}</h3>
              <h3>Area Size - {countries.area}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default fetchCountries;
