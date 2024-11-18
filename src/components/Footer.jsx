import { Box, Divider, Text, Link, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <hr />

            <Box zIndex={"1"} height={{ base: "500px", sm: "300px", md: "300px", lg: "300px", xl: "300px", '2xl': "300px" }} display={"flex"} flexDirection={"column"} gap={"10px"}  >
                <Box width={"90%"} margin={"auto"} height={"auto"} display={"flex"} flexDirection={{ base: "column", sm: "row", md: "row", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"space-evenly"} alignItems={"flex-start"} gap={"20px"}>
                    <Box pt={{ base: "20px", sm: "0px", md: "0px", lg: "0px", xl: "0px", '2xl': "0px" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"10px"} >
                        <Image
                            src="../images/edulab.png"
                            // height={"80px"}
                            // height={{ base: "60px", sm: "60px", md: "60px", lg: "60px", xl: "60px", '2xl': "60px" }}
                            width={"170px"}
                        // borderRadius={"10px"}
                        // bg={"#1A1A2E"}
                        // border={"2px solid red"}
                        />
                    </Box>
        	            
                    <Box ml={{ base: "20px", sm: "20px", md: "40px" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"10px"}>
                        <Link fontWeight={"medium"} fontSize={"16px"}> <RouterLink to="/about">About Us</RouterLink></Link>
                        <Link fontWeight={"medium"} fontSize={"16px"}> <RouterLink to="/contacts">Contact us</RouterLink></Link>
                    </Box>
                    <Box ml={{ base: "20px", sm: "20px", md: "30px" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"10px"}>
                        <Link fontSize={"16px"} fontWeight={"medium"}>Use-Cases</Link>
                         <Link fontSize={"15px"} fontWeight={"medium"}>AI Question Generator</Link>
                    </Box>
                    <Box ml={{ base: "20px", sm: "20px", md: "30px" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"10px"}>
                        <Link fontSize={"17px"} fontWeight={"medium"}>Legal</Link>
                        <Link fontSize={"15px"} fontWeight={"medium"}>Terms of Service</Link>
                        <Link fontSize={"15px"} fontWeight={"medium"} >Privacy Policy</Link>
                    </Box>
                </Box>
                <hr />

                <Box width={"90%"} margin={"auto"}  >
                    <Box ml={{ base: "20px", sm: "20px", md: "30px" }} display={"flex"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row", '2xl': "row" }}
                        justifyContent={{ base: "space-evenly",sm: "space-evenly",md: "space-around" }} alignItems={"flex-start"} gap={{ base: "40px", sm: "20px", md: "100px" }} >
                        <Text fontSize={"15px"} fontWeight={"medium"}>Copyright © EdugenAI, Inc. All rights reserved.</Text>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"flex-start"} gap={{ base: "40px", sm: "30px" }} flexWrap={"wrap"}>
                            <Link href=" https://www.youtube.com/user/EdulabIndernship" isExternal>
                                <FaYoutube size={30} />
                            </Link>
                            <Link href="https://www.facebook.com/edulab.in/" isExternal>
                                <FaFacebook size={30} />
                            </Link>
                            <Link href="https://in.linkedin.com/company/edulab" isExternal>
                                <FaLinkedin size={30} />
                            </Link>

                            <Link href="https://twitter.com/edulab_india?lang=en" isExternal>
                                <FaTwitter size={30} />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export { Footer }
