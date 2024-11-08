import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { TypingAnimation } from "./TypingAnnimation";
import { ShimmerButtonDemo } from "./ShimmerButtonDemo";

const Hero = () => {
  return (
    <Box
      height={{ base: "650px", sm: "500px", md: "650px", lg: "600px" }}
      bg={"#011e3c"}
      width={"100%"}
      display={"flex"}
      color={"white"}
      justifyContent={{ base: "flex-start", md: "center" }}
      alignItems={"center"}
      gap={"80px"}
      mt={"70px"} 
    >
      <Box
        width={{ base: "99%", md: "99%" }}
        margin={"auto"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ base: "100%", md: "90%", lg:"70%" }}
          margin={"auto"}
          justifyContent={"center"}
          gap={"10px"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text
            fontWeight="bolder"
            fontSize={["5xl", "5xl", "6xl"]}
            width="99%"
            margin="2px"
            bgGradient="linear(to-r, cyan.500, pink.600)"
            bgClip="text"
            backgroundSize="200% auto"
            
          >
            Generate quizzes from any text in one click using AI.
          </Text>

          <TypingAnimation />
          <Text fontSize={["sm", "md", "lg"]} color="white" fontWeight={"medium"} _hover={{ transform: 'scale(1.1)' }}>
            To generate assessments at scale.
          </Text>

          <Text fontSize={["sm", "md", "lg"]} color="white" fontWeight={"medium"} width="90%" margin="auto" _hover={{ transform: 'scale(1.1)' }}>
            Supports high-volume quiz generation of up to 150 quizzes from 100,000 words in 1-click!
          </Text>

          <ShimmerButtonDemo name={"Start for Free"} path="/questionForm" /> {/* Pass the path here */}

          <Text p={"15px"} fontSize={["sm", "md", "lg"]} color="white" fontWeight={"medium"} _hover={{ transform: 'scale(1.1)' }}>
            No Credit Card required!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export { Hero };
