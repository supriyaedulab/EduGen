import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const InfoCard = ({ imageSrc, title, description }) => {
  return (
   
    <Box
      width={{ base: "99%", sm: "99%", md: "35%", lg: "29%", xl: "29%" }}
      margin="auto"
      height={{ base: "auto", sm: "auto", md: "500px", lg: "500px", xl: "500px" }}
      padding="10px"
      bg="white"
      color="black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="20px"
      borderRadius="15px"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.02)" }}
      // border={"2px solid red"}
    >
         
 
      <Image
        borderRadius="5px"
        mt="15px"
        transition="transform 0.3s"
        _hover={{ transform: "scale(1.08)" }}
        width={{ base: "90%", sm: "90%", md: "200px", lg: "200px", xl: "200px" }}
        src={imageSrc}
      />
      <Text textAlign={"center"} fontWeight="bold" fontSize="20px" color="gray.600"  transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }} >
        {title}
      </Text>
      <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "90%", xl: "90%" }}>
        <Text fontSize="15px" fontWeight="medium" color="gray.600"  transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}>
          {description}
        </Text>
      </Box>
    
    </Box>
   
  );
};

export  {InfoCard};
