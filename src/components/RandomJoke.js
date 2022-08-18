import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import chuck from "../images/chuck.png";
import { Image } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

const RandomJoke = () => {
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
      <Image
        src={chuck}
        alt="chuck"
        id="chuck-img"
        mr="auto"
        ml="auto"
        w={{ base: "50%", md: "20%" }}
      />
      <Button colorScheme="teal" variant="solid" onClick={fetchRandom}>
        Button
      </Button>
      <h4>{currentJoke.joke}</h4>
      <br />
      <br />
    </div>
  );
};

export default RandomJoke;
