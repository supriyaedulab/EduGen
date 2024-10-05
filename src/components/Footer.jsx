import { Box, Divider, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <Box bg={"gray.900"} color={"white"}>
            <hr />
            <Box width={"85%"} margin={"auto"} mt={"40px"} mb={"15px"} height={"auto"} display={"flex"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"space-evenly"} alignItems={"flex-start"} gap={"30px"}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"10px"}>
                    <img
                        src="https://edulab.in/wp-content/uploads/2022/08/edulab-1.jpg"
                        height={"130px"}
                        width={"130px"}
                    />

                </Box>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"10px"} >
                    <Link>About Us</Link>
                    <Link>Contact us</Link>
                </Box>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"10px"} >


                    <Link fontSize={"16px"} >
                        Use-cases
                    </Link>
                    <Link fontSize={"13px"} color={"gray.500"}>
                        AI Question Generator</Link>

                </Box>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"10px"}>
                    <Link fontSize={"16px"} >Legal</Link>
                    <Link fontSize={"13px"} color={"gray.500"}> Terms of Service</Link>
                    <Link fontSize={"13px"} color={"gray.500"}>Privacy Policy</Link>

                </Box>

            </Box>
            <hr />
            <Box width={"85%"} margin={"auto"} mt={"30px"}  >
                <Box display={"flex"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"space-evenly"} alignItems={"flex-start"} gap={"30px"}>
                    <Text fontSize={"13px"} color={"gray.500"}>Copyright © EdugenAI, Inc. All rights reserved. </Text>
                    <Box mb={"20px"} display={"flex"} justifyContent={"space-evenly"} alignItems={"flex-start"} gap={"30px"} >
                        <FaYoutube size={30} />
                        <FaFacebook size={30} />
                        <FaLinkedin size={30} />
                        <FaInstagram size={30} />
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export { Footer }

