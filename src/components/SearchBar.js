import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [jokes, setJokes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText) {
      alert("Please enter a search");
      return;
    }
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
      .then((response) => {
        const data = response.data.result;
        console.log(data);
        setJokes(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            placeholder={"Search joke"}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button>Search</button>
        </form>
      </div>
      <p>
        {jokes.map((joke, index) => (
          <h2 key={index}>{joke.value}</h2>
        ))}
      </p>
    </div>
  );
};

export default SearchBar;
