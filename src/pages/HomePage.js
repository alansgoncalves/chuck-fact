import React from "react";
import RandomJoke from "../components/RandomJoke";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div>
      <RandomJoke />
      <SearchBar />
    </div>
  );
};

export default HomePage;
