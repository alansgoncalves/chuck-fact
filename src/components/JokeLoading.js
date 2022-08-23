import React from "react";
import { Stack, Skeleton } from "@chakra-ui/react";
// import "./../index.css";

const ChatLoading = () => {
  return (
    <div id="loading-jokes" data-cy="skeleton-joke">
      <Stack gap={1} duration="3000">
        <Skeleton w="100%" h="10" />
        <Skeleton w="100%" h="10" />
        <Skeleton w="100%" h="10" />
        <Skeleton w="100%" h="10" />
        <Skeleton w="100%" h="10" />
      </Stack>
    </div>
  );
};

export default ChatLoading;
