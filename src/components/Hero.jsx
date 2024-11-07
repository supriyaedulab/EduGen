import { Box, Button, Text, Heading, keyframes } from "@chakra-ui/react";
import React from "react";
import { DelayedText } from "./DelayedText";
import { ShimmerButtonDemo } from "./ShimmerButtonDemo";
import { TypingAnimation } from "./TypingAnnimation";

const shine = keyframes`
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
`;
const Hero = () => {
  return (
    <Box
      height={{ base: "650px", sm: "500px", md: "650px", lg: "600px" }}
      bg={"#011e3c"}
      width={"100%"}
      display={"flex"}
      color={"white"}
    
      //   justifyContent={"center"}
      justifyContent={{ base: "flex-start", sm: "flex-start", md: "center", lg: "center" }}
      alignItems={"center"}
      gap={"80px"}
      mt={"70px"} 
    >

      <Box
        width={{ base: "99%", sm: "99%", md: "99%" }}
        margin={"auto"}
        // height={"600px"}
        // display={"flex"}
        // // gap={"10px"}
        // gap={{ base: "40px", sm: "20px", md: "40px" }}
        // justifyContent={"center"}
        // flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        alignItems={"center"}
      // border={"1px solid blue"}
      >

        <Box
          display={"flex"}
          flexDirection={"column"}
          // height={"500px"}
          //   width={"48%"}
          width={{ base: "100%", sm: "100%", md: "90%",lg:"70%" ,xl:"70%"}}
          margin={"auto"}
          justifyContent={"center"}
          gap={"10px"}
          alignItems={"center"}
          // border={"1px solid black"}
          textAlign={"center"}
        >
          <Text
            fontWeight="bolder"
            fontSize={["5xl", "5xl", "6xl"]}
            width="99%"
            margin="2px"
            bgGradient="linear(to-r, cyan.500, pink.500)"
            bgClip="text"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            backgroundSize="200% auto"
            animation={`${shine} 5s linear infinite`}
          >
            Generate quizzes from any text in one click using AI.
          </Text>

          {/* <DelayedText /> */}
     <TypingAnimation/>
          <Text
            fontSize={["sm", "md", "lg"]}
            color="white"
            fontWeight={"medium"}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.1)' }}
          >
            To generate assessments at scale.
          </Text>

          <Text
            fontSize={["sm", "md", "lg"]}
            color="white"
            fontWeight={"medium"}
            width="90%"
            margin="auto"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.1)' }}
          >
            Supports high-volume quiz generation of up to 150 quizzes from 100,000 words in 1-click!
          </Text>
          <ShimmerButtonDemo name={"Start for Free"} />
          <Text p={"15px"}
           fontSize={["sm", "md", "lg"]}
            color="white"
            fontWeight={"medium"}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.1)' }}
          >
            No Credit Card required!
          </Text>
        </Box>
        
      </Box>
    </Box>
  );
};

export { Hero };
