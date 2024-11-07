import { Box, Link, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Section2 = () => {
  return (
    <Box   pb={"30px"} textAlign={"center"}   color={"#414850"}  display={"flex"} flexDirection={"column"} justifyContent={'space-around'} height={"auto"} gap={"40px"} pt={"40px"} >
      <Box fontSize={["xl","2xl", "3xl", "3xl"]}  >
        <Text fontWeight={'bold'} >Trusted by 100,000+ users!</Text>
        <Text fontWeight={'bold'} textAlign={"center"} width={"80%"} margin={"auto"}>Join our users in saving hundreds of hours every month on quizzes.</Text>
      </Box>
      <Box display={"flex"} fontWeight={"bold"} fontSize={["xl","2xl", "3xl", "3xl"]} flexDirection={{ base: "column", sm: "row", md: "row", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"center"} alignItems={"center"} gap={"30px"} >
        
        <Box>
          <Text fontWeight={"bold"}>1.5 Million+</Text>
          <Text fontWeight={"bold"} >MCQs</Text>
        </Box>

        <Box >
          <Text fontWeight={"bold"}>800,000+</Text>
          <Text fontWeight={"bold"} >True/False Qs</Text>
        </Box>
        <Box >
          <Text fontWeight={"bold"}>150,000+</Text>
          <Text fontWeight={"bold"} >Hours Saved!</Text>
        </Box>
      </Box>
      <Text fontWeight={"bolder"}   fontSize={["3xl","3xl", "4xl", "5xl"]} color={"#728199"}  width={{ base: "93%", sm: "93%", md: "95%", lg: "90%", xl: "90%", '2xl': "90%" }} margin={"auto"}>Edugen - The Ultimate AI Question Generator</Text>
  
      <Text height={"auto"} width={{ base: "80%", sm: "80%", md: "80%", lg: "70%", xl: "70%", '2xl': "70%" }} margin={"auto"} color={"gray.600"}  fontSize={["18px","20px", "20px", "20px"]} fontWeight={"medium"}>Questgen is an AI quiz generator to generate various kinds of assessments like Multiple Choice Questions (MCQs), MCQs with multiple correct answers, True/False Questions, Fill-in-the-blanks, Higher-Order Questions, Match-the-following Questions and Bloom's taxonomy quizzes, etc. in one click.</Text>


      <Text height={"auto"} width={{ base: "80%", sm: "80%", md: "80%", lg: "70%", xl: "70%", '2xl': "70%" }} margin={"auto"} color={"gray.600"}  fontSize={["18px","20px", "20px", "20px"]} fontWeight={"medium"}   > You can edit and make modifications to the generated worksheet before exporting it in many of the available formats like PDF, QTI, Moodle XML, CSV, text, etc.</Text>

    </Box>
  )
}

export { Section2 }