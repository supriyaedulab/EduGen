import { Box, Link, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Staticstics } from './Staticstics'

const Section2 = () => {
  return (
    <Box  pb={"40px"}  textAlign={"center"}   color={"#414850"}  display={"flex"} flexDirection={"column"} justifyContent={'space-around'} height={"auto"} gap={"30px"} >
      
      <Staticstics/>
      <Text fontWeight={"bolder"}   fontSize={["3xl","3xl", "4xl", "5xl"]} color={"#728199"}  width={{ base: "93%", sm: "93%", md: "95%", lg: "90%", xl: "90%", '2xl': "90%" }} margin={"auto"} pt={"20px"}>Edugen - The Ultimate AI Question Generator</Text>
  
      <Text height={"auto"} width={{ base: "80%", sm: "80%", md: "80%", lg: "70%", xl: "70%", '2xl': "70%" }} margin={"auto"} color={"gray.600"}  fontSize={["15px","20px", "20px", "20px"]} fontWeight={"medium"}>Questgen is an AI quiz generator to generate various kinds of assessments like Multiple Choice Questions (MCQs), MCQs with multiple correct answers, True/False Questions, Fill-in-the-blanks, Higher-Order Questions, Match-the-following Questions and Bloom's taxonomy quizzes, etc. in one click.</Text>


      <Text height={"auto"} width={{ base: "80%", sm: "80%", md: "80%", lg: "70%", xl: "70%", '2xl': "70%" }} margin={"auto"} color={"gray.600"}  fontSize={["15px","20px", "20px", "20px"]} fontWeight={"medium"}   > You can edit and make modifications to the generated worksheet before exporting it in many of the available formats like PDF, QTI, Moodle XML, CSV, text, etc.</Text>

    </Box>
  )
}
export { Section2 }