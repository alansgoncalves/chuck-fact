import React, { useState } from "react";
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
        position: "bottom",
      });
    }
    setLoading(true);
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
      .then((response) => {
        const data = response.data.result;
        console.log(data);
        setLoading(false);
        setJokes(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormControl>
      <InputGroup
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w={{ base: "70%", md: "40%" }}
        color="black"
        mr="auto"
        ml="auto"
        borderRadius="10px"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="black" />}
        />
        <Input
          type="text"
          placeholder="Search term..."
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
          Click
        </Button>
      </InputGroup>
      <div>
        {loading ? (
          <JokeLoading />
        ) : (
          jokes.map((joke, index) => (
            <p id="joke-txt" width="50px" key={index}>
              {joke.value}
            </p>
          ))
        )}
      </div>
    </FormControl>
  );
};

export default SearchBar;
