import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { FaUserFriends, FaClock, FaBrain, FaChartLine } from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <Box as="section" textAlign="center" py={12} bg="gray.50" >
      <Heading as="h2" fontWeight={"bolder"}   fontSize={["3xl","3xl", "4xl", "5xl"]} color={"#728199"}  width={{ base: "93%", sm: "93%", md: "95%", lg: "90%", xl: "90%", '2xl': "90%" }} margin={"auto"}  mb={8}>
        Why Use the AI-Powered Question Generator?
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} maxW="4xl" mx="auto" px={4}>
        {/* Card for Enhanced Engagement */}
        <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="left">
          <Flex align="center" mb={4}>
            <Icon as={FaUserFriends} w={8} h={8} color="blue.500" mr={4} />
            <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.800">
              Enhanced Engagement
            </Heading>
          </Flex>
          <Text color="gray.600">
            Keep your audience engaged with dynamic, varied question formats.
          </Text>
        </Box>

        {/* Card for Time-Saving Efficiency */}
        <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="left">
          <Flex align="center" mb={4}>
            <Icon as={FaClock} w={8} h={8} color="blue.500" mr={4} />
            <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.800">
              Time-Saving Efficiency
            </Heading>
          </Flex>
          <Text color="gray.600">
            Automate hours of manual question creation, freeing up time for other important tasks.
          </Text>
        </Box>

        {/* Card for Improved Knowledge Retention */}
        <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="left">
          <Flex align="center" mb={4}>
            <Icon as={FaBrain} w={8} h={8} color="blue.500" mr={4} />
            <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.800">
              Improved Knowledge Retention
            </Heading>
          </Flex>
          <Text color="gray.600">
            Regular knowledge checks help reinforce learning and understanding.
          </Text>
        </Box>

        {/* Card for Scalable Solution */}
        <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="left">
          <Flex align="center" mb={4}>
            <Icon as={FaChartLine} w={8} h={8} color="blue.500" mr={4} />
            <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.800">
              Scalable Solution
            </Heading>
          </Flex>
          <Text color="gray.600">
            Perfect for both small teams and large organizations seeking scalable solutions for training and assessment.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export  {BenefitsSection};
