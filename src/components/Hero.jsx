import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { TypingAnimation } from "./TypingAnnimation";
import { ShimmerButtonDemo } from "./ShimmerButtonDemo";

const Hero = () => {
  return (
    <Box
      height={{ base: "480px", sm: "500px", md: "550px", lg: "600px" }}
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
            fontSize={["4xl","5xl","5xl", "6xl"]}
            width="98%"
            textAlign={"center"}
            margin="auto"
            // bgGradient="linear(to-r, cyan.500, #8259c1)"
            background="linear-gradient(to right, rgba(0, 139, 186, 1), rgba(219, 68, 133, 1))"
            bgClip="text"
            backgroundSize="200% auto"
            wordSpacing={["-2px", "-2px", "normal"]} // Adjust word spacing for smaller screens
            letterSpacing={["-0.5px", "-0.5px", "normal"]} // Tweak letter spacing for compact appearance
            lineHeight={["shorter", "short", "normal"]}
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
