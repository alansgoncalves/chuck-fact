import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import JokeLoading from "./JokeLoading";
import Highlighter from "react-highlight-words";

const SearchBar = () => {
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
    <FormControl p="0 50px 0 50px">
      <InputGroup
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w={{ base: "70%", md: "40%" }}
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
          type="text"
          placeholder="Search term..."
          isInvalid
          errorBorderColor="blue.300"
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={handleSubmit}
          ml="5px"
        >
          Search
        </Button>
      </InputGroup>
      <br />
      <ul>
        {loading ? (
          <JokeLoading />
        ) : (
          jokes.map((joke, index) => (
            <li fontSize="2xl" id="joke-txt" key={index}>
              <Highlighter
                highlightClassName="markjoke"
                searchWords={[searchText]}
                autoEscape={true}
                textToHighlight={joke.value}
              />
              <h2>
                {joke.categories.length === 0 ? (
                  <p>
                    Categorie: <span className="categ-txt">No categorie</span>
                  </p>
                ) : (
                  <p>
                    Categorie:{" "}
                    <span className="categ-txt">{joke.categories}</span>
                  </p>
                )}
              </h2>
            </li>
          ))
        )}
      </ul>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        Click
      </button>
      <br />
    </FormControl>
  );
};

export default SearchBar;
