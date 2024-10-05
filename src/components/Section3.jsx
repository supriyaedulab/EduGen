

import { Box, Link, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Section3 = () => {
    return (
        < >

            <Box  textAlign={"justify"} width={"98%"} margin={"auto"} height={"auto"} display={"flex"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"center"} alignItems={"centre"} gap={"20px"} mt={{ base: "60px", sm: "70px", md: "50px", lg: "50px", xl: "50px" }} mb={{ base: "20px", sm: "20px", md: "20px", lg: "10px", xl: "10px" }} >


                <Box width={{ base: "95%", sm: "95%", md: "95%", lg: "300px", xl: "300px" }} height={{ base: "auto", sm: "auto", md: "500px", lg: "500px", xl: "500px" }} padding={"10px"} bg={"#f0f3fa"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"} borderRadius={"15px"}>

                    <Image
                        mt={"15px"} width={{ base: "90%", sm: "90%", md: "200px", lg: "200px", xl: "200px" }} src="./src/images/427004e4-fb4e-4981-a632-ab0bc23e88ad_undraw_teaching_f1cm_png92a7.jpg" />
                    <Text fontWeight={'bold'} fontSize={"20px"} >Teachers and Schools</Text>
                    <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "250px", xl: "250px" }} >
                        <Text fontSize={"13px"}>Teachers and Schools can use the Questgen authoring tool to create worksheets easily in a few seconds. They can avoid repetitive questions chosen from a fixed question bank every year.</Text>
                    </Box>
                </Box>

                <Box width={{ base: "95%", sm: "95%", md: "95%", lg: "300px", xl: "300px" }} height={{ base: "auto", sm: "auto", md: "500px", lg: "500px", xl: "500px" }} padding={"10px"} bg={"#f0f3fa"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"} borderRadius={"15px"}>

                    <Image
                        mt={"15px"} width={{ base: "90%", sm: "90%", md: "200px", lg: "200px", xl: "200px" }} src='./src/images/c1582509-90a4-473a-8b94-9c8bc79384f7_undraw_team_ih79_png92a7.png' />
                    <Text fontWeight={'bold'} fontSize={"20px"} >HR Teams</Text>
                    <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "250px", xl: "250px" }}   >
                        <Text fontSize={"13px"}>HR teams can use Questgen to create assessments from compliance documents. Every time there is a change in policies, assessments could be generated and given to employees to make sure that they have read and understood the new policies.</Text>
                    </Box>
                </Box>
                {/*  height={{ base: "auto", sm: "auto",  md: "500px", lg: "500px", xl: "500px"}} */}
                <Box width={{ base: "95%", sm: "95%", md: "95%", lg: "300px", xl: "300px" }} height={{ base: "auto", sm: "auto",  md: "500px", lg: "500px", xl: "500px"}} padding={"10px"} bg={"#f0f3fa"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"} borderRadius={"15px"} >
                                   
             
                    <Image
                        mt={"15px"} width={{ base: "90%", sm: "90%", md: "200px", lg: "200px", xl: "200px" }} src='./src/images/67039692-b18b-48c5-b4fc-09dde9ae7672_undraw_Notebook_re_id0r_png92a7.png' />
                    <Text fontWeight={'bold'} fontSize={"20px"} textAlign={"center"}>Publishers and Edtech Companies</Text>
                    <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "250px", xl: "250px" }} >
                        <Text fontSize={"13px"}>Textbook publishers and edtech companies can use Questgen instead of outsourcing the assessment creation process. They can have a small in-house team and save hugely on time and cost.</Text>
                    </Box>
                </Box>
            </Box>


        </>
    )
}

export { Section3 }
