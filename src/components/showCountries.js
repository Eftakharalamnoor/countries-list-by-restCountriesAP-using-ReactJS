import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import FetchCountries from "./fetchCountries";
import AllBtn from "./AllBtn";
import SearchForm from "./searchForm";

const ShowCountries = () => {
  const [countryList, setCountryList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);
  const [filterByArea, setFilterByArea] = useState(false);
  const [filterByRegion, setFilterByRegion] = useState(false);

  // Fetch country List
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v2/all?fields=name,region,area"
        );
        const data = await res.json();
        setCountryList(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch country List By Search
  async function searchCountries() {
    try {
      const res = await fetch(`https://restcountries.com/v2/name/${search}`);
      const data = await res.json();
      setCountryList(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Search for country
  function searchHandler(e) {
    e.preventDefault();
    searchCountries();
  }

  // Ascending Order
  const assendingHandler = () => {
    let data = [...countryList];
    if (data.length > 0) {
      let result = data.sort((a, b) => a.name.localeCompare(b.name));
      setCountryList(result);
      console.log(result);
    }
  };

  // Descending Order
  const dessendingHandler = () => {
    let data = [...countryList];
    if (data.length > 0) {
      let result = data.sort((a, b) => b.name.localeCompare(a.name));
      setCountryList(result);
      console.log(result);
    }
  };

  // Filter the CountryList
  const handleFilterByArea = () => {
    setFilterByArea(!filterByArea);
  };

  const handleFilterByRegion = () => {
    setFilterByRegion(!filterByRegion);
  };

  useEffect(() => {
    let data = [...countryList];
    if (filterByRegion) {
      data = data.filter((country) => country.region === "Oceania");
    }
    setCountryList(data);
    // eslint-disable-next-line
  }, [filterByRegion]);

  useEffect(() => {
    let data = [...countryList];
    if (filterByArea) {
      data = data.filter((country) => {
        if (country.name !== "Lithuania") {
          return (
            country.area < countryList.find((c) => c.name === "Lithuania").area
          );
        }
        return false;
      });
    }
    setCountryList(data);
    // eslint-disable-next-line
  }, [filterByArea]);

  // Pagination Codes
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = countryList.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container">
      {!countryList ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <div>
          <SearchForm
            searchHandler={searchHandler}
            search={search}
            setSearch={setSearch}
          />
          <AllBtn
            assendingHandler={assendingHandler}
            dessendingHandler={dessendingHandler}
            handleFilterByArea={handleFilterByArea}
            handleFilterByRegion={handleFilterByRegion}
          />

          <Pagination
            totalPosts={countryList.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />

          <FetchCountries currentPosts={currentPosts} />
          <Pagination
            totalPosts={countryList.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default ShowCountries;
