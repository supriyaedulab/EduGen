

import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  VStack,
  Container,
} from "@chakra-ui/react";

function Teams() {
  const leadershipTeam = [
    {
      name: "Pratik Gandhi, CEO",
      title: "Pratik Gandhi is a Chief executive officer (CEO) of Edulab India.",
      image: "https://edulab.in/wp-content/uploads/2018/10/sir_pratik.jpg",
    },
    {
      name: "Francis Pinto, CTO",
      title: "Francis Pinto is the Chief Technology Officer (CTO) of Edulab",
      image: "https://edulab.in/wp-content/uploads/2018/10/francis-Sir-300x300.jpg",
    },
    {
      name: "Kumar Pal, COO",
      title: "Kumar Pal is the Chief Operation Officer (COO) of Edulab",
      image: "https://edulab.in/wp-content/uploads/2022/08/1516638761860.jpg",
    },
   
  ];


  return (
    <Container maxW="container.lg" py={8}>
      <Section
        title="Meet Our Team"
       
        members={leadershipTeam}
      />
     
    </Container>
  );
}

function Section({ title, members }) {
  return (
    <Box mb={10}>
      <Heading as="h2" size="lg" mb={4} p={"30px"} textAlign={"center"}>
        {title}
      </Heading>
     
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {members.map((member, index) => (
          <VStack
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            align="center"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={member.image}
            //   alt={member.name}
              mb={4}
            />
            <Heading as="h2" size="md">
              {member.name}
            </Heading>
            <Text fontSize="sm" textAlign="center">
              {member.title}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export  {Teams};
