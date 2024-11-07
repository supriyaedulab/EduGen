import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaBuilding, FaEdit } from "react-icons/fa";

const UseCasesSection = () => {
  return (
    <Box as="section" textAlign="center" py={12} bg="white" >
        <Box width={"93%"} margin={"auto"}>
      <Heading as="h2" fontWeight={"bolder"}   fontSize={["4xl", "4xl", "5xl"]} color={"#728199"}  width={{ base: "93%", sm: "93%", md: "95%", lg: "90%", xl: "90%", '2xl': "90%" }} margin={"auto"} mb={8}>
        Ideal For
      </Heading>

      <Grid templateColumns="1fr" gap={6} maxW="3xl" mx="auto">
        {/* Educators Use Case */}
        <Flex bg="gray.50" p={6} rounded="lg" shadow="md" align="center">
          <Icon as={FaChalkboardTeacher} w={10} h={10} color="green.500" mr={4} />
          <Box textAlign="left">
            <Heading as="h3" fontSize="lg" fontWeight="bold" color="gray.800">
              Educators
            </Heading>
            <Text color="gray.600">
              Automate quiz and exam creation to quickly evaluate student understanding across various subjects.
            </Text>
          </Box>
        </Flex>

        {/* Businesses Use Case */}
        <Flex bg="gray.50" p={6} rounded="lg" shadow="md" align="center">
          <Icon as={FaBuilding} w={10} h={10} color="blue.500" mr={4} />
          <Box textAlign="left">
            <Heading as="h3" fontSize="lg" fontWeight="bold" color="gray.800">
              Businesses
            </Heading>
            <Text color="gray.600">
              Streamline employee training assessments and performance evaluations to ensure knowledge retention.
            </Text>
          </Box>
        </Flex>

        {/* Content Creators Use Case */}
        <Flex bg="gray.50" p={6} rounded="lg" shadow="md" align="center">
          <Icon as={FaEdit} w={10} h={10} color="purple.500" mr={4} />
          <Box textAlign="left">
            <Heading as="h3" fontSize="lg" fontWeight="bold" color="gray.800">
              Content Creators
            </Heading>
            <Text color="gray.600">
              Effortlessly generate interactive questions for blogs, courses, and social media to engage your audience.
            </Text>
          </Box>
        </Flex>
      </Grid>
    </Box>
    </Box>
  );
};

export  {UseCasesSection};
