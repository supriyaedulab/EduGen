


import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Section4 = () => {
    return (
        <>
            <Box pt={{ base: "10px", sm: "10px", md: "10px", lg: "10px", xl: "10px" }}>
                <Text fontWeight={"bolder"} fontSize={"4xl"} textAlign={"center"}width={"80%"}margin={"auto"} mt={{ base: "30px", sm: "30px", md: "30px", lg: "0px", xl: "30px" }} mb={{ base: "30px", sm: "30px", md: "30px", lg: "20px", xl: "20px" }} >What are the supported input formats?</Text>
                <Text height={"auto"} textAlign={"center"} width={{ base: "80%", sm: "80%", md: "80%", lg: "70%", xl: "47%", '2xl': "47%" }} margin={"auto"}  fontSize={"17px"} fontWeight={"normal"}  >Edugen supports several input formats such as plain text, Website URL, PDF, Word document (DOCX) etc. Read Review about us on FixthePhoto.</Text>
                <Box  width={{ base: "90%", sm: "90%", md: "70%", lg: "60%", xl: "60%"  }} margin={"auto"} mt={"30px"}>
                    <Image borderRadius={"10px"}width={"100%"} src='../images/2egT7ySMEoWmxU3pWeZ0h7L0IQk_Untitled_design_1_.png' />
                </Box>
                <Text fontWeight={"bolder"} fontSize={"4xl"} textAlign={"center"}width={"80%"}margin={"auto"} mt={{ base: "30px", sm: "30px", md: "40px", lg: "40px", xl: "40px" }} mb={{ base: "30px", sm: "30px", md: "30px", lg: "20px", xl: "20px" }}>What are the supported quiz export formats?</Text>
            </Box>
        </>
    )
}

export { Section4 }
// linear-gradient(to right, #c8f9db 0%, #96bcfd 100%)
// #c8f9db  #96bcfd