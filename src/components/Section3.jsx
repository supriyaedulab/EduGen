import { Box, Link, Text, Image } from '@chakra-ui/react';
import React from 'react';

const Section3 = () => {
    return (
        < >
       
        <Box   bg="#f0f3fa"  pt="30px" pb={"30px"}  width={"100%"}>
            <Box
            // border={"2px solid blue"}
            width={"95%"}
                // width={{ base: "98%", sm: "98%", md: "99%", lg: "98%", xl: "98%" }}
                margin={"auto"}
                // width={"1"}
                textAlign={"justify"}
                height={"auto"}
                display={"flex"}
                flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row", '2xl': "row" }}
                justifyContent={"space-between"}
                // alignItems={"center"} // Fixing "centre" to "center"
                gap={"15px"}
                // pt={{ base: "60px", sm: "70px", md: "50px", lg: "20px", xl: "20px" }}
                // pb={{ base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "20px" }}
                color={"white"}
                // padding={"40px"}
            >
                {/* Card 1 */}
                <Box
                //  border={"2px solid red"}
                    width={{ base: "99%", sm: "99%", md: "35%", lg: "29%", xl: "29%" }}
                    margin={"auto"}
                    height={{ base: "auto", sm: "auto", md: "500px", lg: "500px", xl: "500px" }}
                    padding={"10px"}
                    // bg={"#3187c0"}
                    // bg={"linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}
                    bg={"white"}
                    // bg={"gray.300"}
                    color={"black"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"20px"}
                    borderRadius={"15px"}
                    transition="transform 0.3s" // Add transition for smooth effect
                    _hover={{ transform: "scale(1.03)" }} // Scale on hover
                >
                    <Image
                        borderRadius={"5px"}
                        mt={"15px"}
                        width={{ base: "90%", sm: "90%", md: "200px", lg: "200px", xl: "200px" }}
                        src="../images/427004e4-fb4e-4981-a632-ab0bc23e88ad_undraw_teaching_f1cm_png92a7.jpg"
                    />
                    <Text fontWeight={'bold'} fontSize={"20px"}color={"gray.600"}>Teachers and Schools</Text>
                    <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "90%", xl: "90%" }}>
                        <Text fontSize={"15px"} fontWeight={'medium'} color={"gray.600"}>Teachers and Schools can use the Questgen authoring tool to create worksheets easily in a few seconds. They can avoid repetitive questions chosen from a fixed question bank every year.</Text>
                    </Box>
                </Box>

                {/* Card 2 */}
                <Box
                    width={{ base: "99%", sm: "99%", md: "35%", lg:"29%", xl: "29%" }}
                    margin={"auto"}
                    height={{ base: "auto", sm: "auto", md: "500px", lg: "500px", xl: "500px" }}
                    padding={"10px"}
                    // bg={"linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}
                    // bg={"#d5def5"}
                    bg={"white"}
                    // bg={"gray.300"}
                    color={"black"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"20px"}
                    borderRadius={"15px"}
                    transition="transform 0.3s" // Add transition for smooth effect
                    _hover={{ transform: "scale(1.03)" }} // Scale on hover
                >
                    <Image
                        borderRadius={"5px"}
                        mt={"15px"}
                        width={{ base: "90%", sm: "90%", md: "200px", lg: "200px", xl: "200px" }}
                        src='../images/c1582509-90a4-473a-8b94-9c8bc79384f7_undraw_team_ih79_png92a7.png'
                    />
                    <Text fontWeight={'bold'} fontSize={"20px"}color={"gray.600"}>HR Teams</Text>
                    <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "90%", xl: "90%" }}>
                        <Text fontSize={"15px"}fontWeight={'medium'}color={"gray.600"}>HR teams can use Questgen to create assessments from compliance documents. Every time there is a change in policies, assessments could be generated and given to employees to make sure that they have read and understood the new policies.</Text>
                    </Box>
                </Box>

                {/* Card 3 */}
                <Box
                    width={{ base: "99%", sm: "99%", md: "35%", lg: "29%", xl: "29%" }}
                    margin={"auto"}
                    height={{ base: "auto", sm: "auto", md: "500px", lg: "500px", xl: "500px" }}
                    padding={"10px"}
                    // bg={"#3187c0"}
                    // bg={"linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}
                    // bg={"#d5def5"}
                    bg={"white"}
                    // bg={"gray.300"}
                    color={"black"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"20px"}
                    borderRadius={"15px"}
                    transition="transform 0.3s" // Add transition for smooth effect
                    _hover={{ transform: "scale(1.03)" }} // Scale on hover
                >
                    <Image
                        borderRadius={"5px"}
                        mt={"15px"}
                        width={{ base: "90%", sm: "90%", md: "200px", lg: "200px", xl: "200px" }}
                        src='../images/67039692-b18b-48c5-b4fc-09dde9ae7672_undraw_Notebook_re_id0r_png92a7.png'
                    />
                    <Text fontWeight={'bold'} fontSize={"20px"} textAlign={"center"}color={"gray.600"}>Publishers and Edtech Companies</Text>
                    <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "90%", xl: "90%" }}color={"gray.600"}>
                        <Text fontSize={"15px"}fontWeight={'medium'}>Textbook publishers and edtech companies can use Questgen instead of outsourcing the assessment creation process. They can have a small in-house team and save hugely on time and cost.</Text>
                    </Box>
                </Box>
            </Box>
            </Box>
        </>
    );
}

export { Section3 };
