import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RandomJokeButton = () => {
  return (
    <div>
      <Link to="/categories">
        <Button className="random-btn" colorScheme="teal" variant="solid">
          I'm feeling lucky
        </Button>
      </Link>
    </div>
  );
};

export default RandomJokeButton;
