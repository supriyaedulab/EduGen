import {
  Box,
  Heading,
  Text,
  Grid,
  Container,
  VStack,
 
} from "@chakra-ui/react";

import { TeamSection } from "../components/TeamNew";


const About = () => {

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
              <Box textAlign={{ base: "center", sm: "center", md: "left" }}>
                <Heading as="h2" size="xl" mb={2}>
                  Our Story
                </Heading>
                <Text>
                  Edulab Educational Exchange Pvt. Ltd. was founded by Pratik Gandhi and a core team of three more members in 2010.
                </Text>
              </Box>

              <Box textAlign={{ base: "center", sm: "center", md: "left" }}>
                <Heading as="h2" size="xl" mb={2}>
                  Our Mission
                </Heading>
                <Text>
                  Our mission is to provide a better educational future to the young generation of India.
                </Text>
              </Box>

              <Box textAlign={{ base: "center", sm: "center", md: "left" }}>
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
      <Box bg={"#f9f9f9"} color={"white"} opacity={"0.9"} >
      <TeamSection />
        

      </Box>

    </Box>
  );
};

export { About };