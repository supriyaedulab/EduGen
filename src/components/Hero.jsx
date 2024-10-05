import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { DelayedText } from "./DelayedText";

const Hero = () => {
  return (
    <Box
    // bg={{base:"pink.800", sm: "green.800", md: "yellow.400", lg: "red.500" }}
    height={{base:"1040px", sm: "1030px", md: "700px",lg: "800px"}}
      bg={"#e5feff"}
      width={"100%"}
      display={"flex"}
    //   justifyContent={"center"}
      justifyContent={{base:"flex-start", sm: "flex-start", md: "center",lg: "center"}}
      alignItems={"center"}
      // border={"1px solid blue"}
      gap={"80px"}

    >
      <Box
        // width={"99%"}
    
       
         width={{base:"100%", sm: "100%", md: "99%" }}
         margin={"auto"}
        // height={"600px"}
        display={"flex"}
        // gap={"10px"}
        gap={{base:"40px", sm: "20px", md: "40px"}}
        justifyContent={"center"}
        flexDirection= {{ base: "column",sm:"column", md: "row", lg: "row" }}
        alignItems={"center"}
        // border={"1px solid blue"}
      >
      
        <Box
          display={"flex"}
          flexDirection={"column"}
          // height={"500px"}
        //   width={"48%"}
          width={{base:"100%", sm: "100%", md: "48%"}}
          justifyContent={"center"}
          gap={"10px"}
          alignItems={"center"}
          // border={"1px solid black"}
       textAlign={"center"}
        >
          <Text fontWeight={"bolder"} fontSize={"5xl"}width={"96%"} margin={"auto"}>
            Generate <span style={{ color: "blue" }}>quizzes</span> from any
            text in one click using AI.
          </Text>
          <DelayedText />

          <Text  fontSize={"17px"}>To generate assessments at scale.</Text>
          <Text fontSize={"17px"} width={"96%"} margin={"auto"}>
            {" "}
            Supports high-volume quiz generation of up to 150 quizzes from
            100,000 words in 1-click!
          </Text>
          <Button bgGradient='linear(to-r, #7928CA, #FF0080)' color={"white"} borderRadius={"20px"}mt={"10px"} mb={"10px"} padding={"20px 20px"} _hover={{ bgGradient: 'linear(to-r, #7928CA, #FF0080)' }}>Start for free </Button>
           <Text Text  fontSize={"18px"}>No Credit Card required!</Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          // height={"500px"}
          // border={"1px solid black"}
       
          width={{base:"90%", sm: "80%", md: "37%"}}
        >
          <img
            height={"100%"}
            // width={"90%"}
             width= {{ base: "100%",sm:"50%" ,md: "40%", lg: "90%" }}
            src="./src/images/c05633a3-c0bd-4947-bd91-fd3cfdf07397_Untitled_design_png92a7.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export { Hero };
