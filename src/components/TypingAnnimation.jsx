import React, { useState, useEffect } from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const TypingAnimation = () => {
  const items = [
    { text: "HR Teams ", color: "white" },
    { text: "Learners ", color: "white" },
    { text: "Teachers ", color: "white" },
  ];
  
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(200); // Typing speed

  const cursorColor = useColorModeValue("gray.800", "white");

  useEffect(() => {
    if (index === items.length) return; // Stop when all items are done

    if (subIndex === items[index].text.length + 1 && !isDeleting) {
      // Pause before starting to delete
      setIsDeleting(true);
      setSpeed(300); // Speed up deleting
      return;
    }

    if (subIndex === 0 && isDeleting) {
      // Move to the next word after deleting
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % items.length);
      setSpeed(200); // Reset speed for typing
      return;
    }

    const timeout = setTimeout(() => {
      setText(items[index].text.substring(0, subIndex));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, items, speed]);

  return (
    <Box
     
      textAlign="center"
      color={items[index].color}
    >
      <Text fontSize={["4xl","4xl", "5xl", "5xl"]}
      fontWeight="bold"> For {text}</Text>
      
    </Box>
  );
};

export  {TypingAnimation};
