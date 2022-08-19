import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const ScrollTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUpBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {backToTop && (
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="lg"
          icon={<ChevronUpIcon />}
          style={{
            position: "fixed",
            padding: "1rem 2rem",
            fontSize: "20px",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#0C9",
            color: "#fff",
            opacity: 0.6,
            textAlign: "center",
          }}
          onClick={scrollUpBtn}
        />
      )}
    </div>
  );
};

export default ScrollTopButton;
