import { Button, FormControl, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import chuck from "../images/chuck.png";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentJoke, setCurrentJoke] = useState("Choose a categorie...");
  const [value, setValue] = React.useState("1");

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        setCategory(response.data);
      });
  }, []);

  const randomJoke = () => {
    if (currentCategory === "") {
      axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
        setCurrentJoke(response.data.value);
      });
    } else {
      axios
        .get(
          `https://api.chucknorris.io/jokes/random?category=${currentCategory}`
        )
        .then((response) => {
          setCurrentJoke(response.data.value);
        });
    }
  };

  return (
    <div className="form">
      <Image
        src={chuck}
        alt="chuck"
        id="chuck-img"
        mr="auto"
        ml="auto"
        w={{ base: "50%", md: "20%" }}
      />
      <h2 className="title-chuck">
        <span className="fire">chuck-</span>
        <span className="burn">joke</span>
      </h2>
      <br />
      <FormControl p={{ base: "0 20px 0 20px", md: "0 50px 0 50px" }}>
        <ul>
          <li id="random-joke-txt" mr="auto" ml="auto">
            <p data-cy="joke-categ" className="joke-list">
              {currentJoke}
            </p>
          </li>
        </ul>
      </FormControl>
      <p className="title">Categories:</p>
      <div className="body-radio-wrapper">
        {category.map((categ, index) => (
          <div onChange={setValue} value={value} key={index}>
            <input
              type="radio"
              name="radio"
              className="input-radio"
              value={categ}
              id={categ}
              onClick={() => setCurrentCategory(categ)}
            />
            <label htmlFor={categ}>{categ}</label>
          </div>
        ))}
      </div>
      <div className="categ-btn">
        <Button
          data-cy="randon-btn-categ"
          colorScheme="teal"
          variant="solid"
          onClick={() => randomJoke()}
          type="module"
        >
          Random Joke!
        </Button>
      </div>
      <div className="categ-btn2">
        <Link to="/">
          <Button
            data-cy="return-btn"
            colorScheme="yellow"
            variant="solid"
            onClick={() => randomJoke()}
            type="module"
          >
            Return
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
