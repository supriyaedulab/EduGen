import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react'; // Using Chakra UI for styling (optional)

const DelayedText = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const texts = ['HR Teams', 'Learners', 'Teachers'];
  const delay = 2000; // Delay in milliseconds for each text

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through texts
    }, delay);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (

      <Text textAlign="center" fontSize="4xl" fontWeight="bold" color={"#4358f6"}>For {texts[visibleIndex]}</Text>

  );
};

export  {DelayedText};
