import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const RandomJokeButton = () => {
  const [currentJoke, setCurrentJoke] = useState({
    joke: "",
  });

  async function fetchRandom() {
    let response = await axios.get("https://api.chucknorris.io/jokes/random");
    let user = await response.data.value;
    setCurrentJoke({ ...currentJoke, joke: response.data.value });
    return user;
  }

  return (
    <div>
      <Button
        className="random-btn"
        colorScheme="teal"
        variant="solid"
        onClick={fetchRandom}
      >
        I'm feeling lucky
      </Button>
      <h4>{currentJoke.joke}</h4>
      <br />
      <br />
    </div>
  );
};

export default RandomJokeButton;
