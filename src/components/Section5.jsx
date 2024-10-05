import {
    Box,Text,
    ListItem,
    UnorderedList,Link
} from '@chakra-ui/react'
import React from 'react'

const Section5 = () => {
    return (


        <Box width={{ base: "90%", sm: "90%", md: "60%", lg: "60%", xl: "60%"  }} margin={"auto"} mt={"30px"}display={"flex"} flexDirection={{ base: "column", sm: "column", md: "column", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
            <Box width={{ base: "90%", sm: "70%", md: "70%", lg: "70%", xl: "50%" }}>

                <img src="https://image.typedream.com/cdn-cgi/image/width=640,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2egVlJjmfbkzOzG6YDfJYJzf34C_CleanShot_2024-04-05_at_19_36_43_2x.png" alt="" />
            </Box>
            <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "50%", xl: "50%" }} margin={"auto"}  >
                <Box width={"90%"} margin={"auto"} color={"gray.600"}>
                    <Text textAlign={"justify"} fontWeight={'bold'} fontSize={"22px"}>Available quiz export formats!</Text>
                    <Text textAlign={"justify"} fontWeight={'medium'} fontSize={"16px"} color={"gray.600"}>You can export the generated quizzes from questgen in any of the following formats:</Text>
                    <UnorderedList>
                        <ListItem>JSON</ListItem>
                        <ListItem>QTI 2.1 (Zip)</ListItem>
                        <ListItem> PDF (Q&A Both)</ListItem>
                        <ListItem> PDF (Questions Only)</ListItem>
                        <ListItem>PDF (Answers Only)</ListItem>
                        <ListItem>Moodle XML</ListItem>
                        <ListItem>GIFT Format</ListItem>
                        <ListItem>Text (AIKEN Format)</ListItem>
                        <ListItem>Text (RESPONDUS)</ListItem>
                        <ListItem>CSV (Compatible with D2L BrightSpace)</ListItem>
                        <ListItem>CSV (Compatible with Form Builder for Gsheets)</ListItem>
                        <ListItem>CSV (Compatible with GimKit)</ListItem>
                        <ListItem>CSV (Compatible with TriviaMaker)</ListItem>
                        <ListItem>CSV (Compatible with Quizziz)</ListItem>
                    </UnorderedList>
                    <Box display={"flex"}justifyContent={"center"} alignItems={"center"} >
                    <Link fontWeight={'medium'} fontSize={"16px"} color={"#757bbe"}>Try for Free</Link>
                </Box>
                </Box>
            </Box>
        </Box>

    )
}

export { Section5 }

// JSON
// QTI 2.1 (Zip)
// PDF (Q&A Both)
// PDF (Questions Only)
// PDF (Answers Only)
// Moodle XML
// GIFT Format
// Text (AIKEN Format)
// Text (RESPONDUS)
// CSV (Compatible with D2L BrightSpace)
// CSV (Compatible with Form Builder for Gsheets)
// CSV (Compatible with GimKit)
// CSV (Compatible with TriviaMaker)
// CSV (Compatible with Quizziz)