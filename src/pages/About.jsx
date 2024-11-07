import {
  Box,
  Heading,
  Text,
  Grid,
  Container,
  VStack,
  useColorModeValue,
  Flex,
  Image, Icon,
  Skeleton,
  SimpleGrid,
  SkeletonText, Link
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import React, { useState, useEffect } from "react";


const About = () => {

  const leadershipTeam = [
    {
      name: "Pratik Gandhi",
      title: "Chief executive officer (CEO).",
      image: "https://edulab.in/wp-content/uploads/2018/10/sir_pratik.jpg",
      linkedinUrl: "https://www.linkedin.com/in/pratik-gandhi-6979838/"
    },
    {
      name: "Francis Pinto",
      title: "Chief Technology Officer (CTO).",
      image: "https://edulab.in/wp-content/uploads/2018/10/francis-Sir-300x300.jpg",
      linkedinUrl: "https://www.linkedin.com/in/francis-pinto/"
    },
    {
      name: "Kumar Pal",
      title: " Chief Operation Officer (COO).",
      image: "https://edulab.in/wp-content/uploads/2022/08/1516638761860.jpg",
       linkedinUrl: "https://www.linkedin.com"
    },
  ];

  return (
    <Box>
      <Box py={{ base: 24, sm: 32 }} bg="#1a84af">
        <Container maxW="7xl" px={{ base: 6, lg: 8 }}>
          <VStack spacing={10} textAlign="center" maxW="6xl" mx="auto">
            <Heading
              fontSize={{ base: "4xl", sm: "6xl" }}
              color="white"
              fontWeight="bold"
              textDecoration="underline"
            >
              About Us
            </Heading>

            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={12} px={{ base: 5, md: 20 }} color="white">
              <Box textAlign={{base:"center",sm:"center",md:"left"}}>
                <Heading as="h2" size="xl" mb={2}>
                  Our Story
                </Heading>
                <Text>
                  Edulab Educational Exchange Pvt. Ltd. was founded by Pratik Gandhi and a core team of three more members in 2010.
                </Text>
              </Box>

              <Box textAlign={{base:"center",sm:"center",md:"left"}}>
                <Heading as="h2" size="xl" mb={2}>
                  Our Mission
                </Heading>
                <Text>
                  Our mission is to provide a better educational future to the young generation of India.
                </Text>
              </Box>

              <Box textAlign={{base:"center",sm:"center",md:"left"}}>
                <Heading as="h2" size="xl" mb={2}>
                  Our Group
                </Heading>
                <Text>
                  The Edulab group is composed of three companies that work in education, experiential learning, and internationalization of education.
                </Text>
              </Box>
            </Grid>
          </VStack>
        </Container>
      </Box>
      <Box bg={"#f9f9f9"} color={"white"} opacity={"0.9"}>
        <Container maxW="container.xl" py={4}>
          <Section title="Our Team" members={leadershipTeam} />
        </Container>
      </Box>

    </Box>
  );
};
function Section({ title, members }) {
  return (
    <Box mb={10}>
      <Heading
        as="h2"
        size="2xl"
        mb={"100px"}
        pt={"30px"}
        color={"#011e3c"}
        textAlign={"center"}
        textDecoration={"underline"}
      >
        {title}
      </Heading>
      <Box> 
        <SimpleGrid columns={[1, 2, 3]} spacingY={{ base: "60px",sm:"50px" }} spacingX={{ base: "10px",sm:"10px",md:"10px" ,lg: "30px" }}>
          {members.map((member, index) => (
            <VStack
              key={index}
              p={"10px"}
              borderWidth="3px"
              borderRadius="md"
              boxShadow="md"
              align="center"
              bg="#ffffff" // Set the background color to white
              color="#011e3c" // Change text color to match the background
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
            >

              <Image
                zIndex={"1"}
                position={"relative"}
                top={"-50px"}
                borderWidth="3px"
                borderRadius="full"
                boxSize="170px"
                src={member.image}
                p={"2"}
                objectFit={"cover"}
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
              />

              <Heading
                as="h2"
                size={["lg", "md","md" ,"lg"]}
                position={"relative"}
                top={"-40px"}
                transition="transform 0.3s ease-in-out"
                textAlign="center"
                _hover={{ transform: "scale(1.05)" }}
              >
                {member.name}
              </Heading>
              <Text
                fontSize={["lg", "md","md" ,"lg"]}
                position={"relative"}
                top={"-30px"}
                color="#011e3c" // Change text color to black for better contrast
                fontWeight={"medium"}
                textAlign="center"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.05)" }}
              >
                {member.title}
              </Text>
            
              <Link isExternal color="blue.600"href={member.linkedinUrl} position={"relative"}
                top={"-20px"}>
                <Icon as={FaLinkedin} boxSize={10} />
              </Link>
            </VStack>
          ))}
        </SimpleGrid>
        
      </Box>
    </Box>
  );
}
export { About };
