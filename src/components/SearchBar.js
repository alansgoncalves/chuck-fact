import React from "react";
import { Box } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w={{ base: "70%", md: "50%" }}
        p="5px 10px 5px 10px"
        borderWidth="5px"
        mr="auto"
        ml="auto"
        borderRadius="10px"
      >
        <Tooltip
          label="Search for users to chat"
          hasArrow
          placement="bottom-end"
        >
          <Button variant="ghost">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Tooltip>
      </Box>
    </div>
  );
};

export default SearchBar;
