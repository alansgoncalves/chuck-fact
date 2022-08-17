import React, { useEffect } from "react";
import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import chuck from "../images/chuck.png";
import { Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

const SearchBar = () => {
  async function fetchData() {
    let response = await axios.get("https://api.chucknorris.io/jokes/random");
    let user = await response.data.value;
    console.log(user);
  }

  useEffect(() => {
    fetchData();
  });

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
      <Stack spacing={4}>
        <InputGroup
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          w={{ base: "70%", md: "40%" }}
          color="black"
          // borderWidth="2px"
          mr="auto"
          ml="auto"
          borderRadius="10px"
        >
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="black" />}
          />
          <Input type="tel" placeholder="Search term..." />
        </InputGroup>
      </Stack>
    </div>
  );
};

export default SearchBar;
