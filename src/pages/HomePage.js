import React, { useState } from "react";
import axios from "axios";
import chuck from "../images/chuck.png";
import {
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  FormControl,
  Image,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import JokeLoading from "../components/JokeLoading.js";
import Highlighter from "react-highlight-words";
import ScrollTopButton from "../components/ScrollTopButton.js";
import RandomJokeButton from "../components/RandomJokeButton.js";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText) {
      toast({
        title: "Please, type a term",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
        backgroundColor: "red",
      });
    }
    setLoading(true);
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
      .then((response) => {
        const data = response.data.result;
        // console.log(data);
        setLoading(false);
        setJokes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <h2>Chuck Norris Jokes!</h2>
      <FormControl p={{ base: "0 20px 0 20px", md: "0 50px 0 50px" }}>
        <InputGroup
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          w={{ base: "100%", md: "600px" }}
          minW="30%"
          color="black"
          mr="auto"
          ml="auto"
          borderRadius="10px"
          className="search-btn"
        >
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="black" />}
          />
          <Input
            data-cy="input-term"
            type="text"
            placeholder="Search term..."
            isInvalid
            errorBorderColor="blue.300"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </InputGroup>
        <div className="btns-joke">
          <Button
            data-cy="btn-search"
            className="search-btn"
            colorScheme="teal"
            variant="solid"
            onClick={handleSubmit}
            width="100px"
          >
            Search
          </Button>
          <RandomJokeButton />
        </div>
        <br />
        <ul>
          {loading ? (
            <JokeLoading />
          ) : (
            jokes.map((joke, index) => (
              <li id="joke-txt" key={index}>
                <p data-cy="list-search" className="joke-list">
                  <Highlighter
                    highlightClassName="markjoke"
                    searchWords={[searchText]}
                    autoEscape={true}
                    textToHighlight={joke.value}
                  />
                </p>
                <h2>
                  {joke.categories.length === 0 ? (
                    <p className="categ-p">
                      Categorie: <span className="categ-txt">No categorie</span>
                    </p>
                  ) : (
                    <p className="categ-p">
                      Categorie:{" "}
                      <span className="categ-txt">{joke.categories}</span>
                    </p>
                  )}
                </h2>
              </li>
            ))
          )}
        </ul>
        <br />
        <ScrollTopButton />
      </FormControl>
    </div>
  );
};

export default HomePage;
