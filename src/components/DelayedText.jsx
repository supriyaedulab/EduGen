import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react'; // Using Chakra UI for styling

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
    <Text
      textAlign="center"
      fontSize="4xl"
      fontWeight="bold"
      bgGradient="linear-gradient(to right, #b018ab 0%, #e2d2df 100%)"
      bgClip="text"
      opacity="0.5"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.2)' }}
    >
      For {texts[visibleIndex]}
    </Text>
  );
};

export { DelayedText };
