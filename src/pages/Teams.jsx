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
      title: "Chief executive officer (CEO).",
      image: "https://edulab.in/wp-content/uploads/2018/10/sir_pratik.jpg",
    },
    {
      name: "Francis Pinto, CTO",
      role: "Chief Technology Officer (CTO).",
      image: "https://edulab.in/wp-content/uploads/2018/10/francis-Sir-300x300.jpg",
    },
    {
      name: "Kumar Pal, COO",
      role: " Chief Operation Officer (COO).",
      image: "https://edulab.in/wp-content/uploads/2022/08/1516638761860.jpg",
    },
  ];

  return (
    <Box bg={"#f9f9f9"} color={"white"} opacity={"0.9"}>
      <Container maxW="container.lg" py={8}>
        <Section title="Meet Our Team" members={leadershipTeam} />
      </Container>
    </Box>
  );
}

function Section({ title, members }) {
  return (
    <Box mb={10}>
      <Heading
        as="h2"
        size="2xl"
        mb={4}
        p={"30px"}
        color={"#011e3c"}
        textAlign={"center"}
        textDecoration={"underline"}
      >
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
            bg="#fdfdfd" // Set the background color to white
            color="#011e3c" // Change text color to match the background
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={member.image}
              mb={4}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Heading
              as="h1"
              size="xl"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
            >
              {member.name}
            </Heading>
            <Text
              fontSize="sm"
              color="#011e3c" // Change text color to black for better contrast
              fontWeight={"medium"}
              textAlign="center"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
            >
              {member.title}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

// export { Teams };


// import { Box, Flex, Heading, Text, Image, VStack, useColorModeValue } from "@chakra-ui/react";

// const teamData = [
//   {
//     // name: "Alice Johnson",
//     // role: "Project Manager",
//     // imageUrl: "https://via.placeholder.com/150",


//     name: "Pratik Gandhi, CEO",
//     role: "Chief executive officer (CEO).",
//     imageUrl: "https://edulab.in/wp-content/uploads/2018/10/sir_pratik.jpg",
//     bio: "Experienced project manager with a passion for innovation and technology."
//   },
//   {
//     name: "Francis Pinto, CTO",
//       role: "Chief Technology Officer (CTO).",
//       imageUrl: "https://edulab.in/wp-content/uploads/2018/10/francis-Sir-300x300.jpg",
//     bio: "Full-stack developer focused on creating seamless user experiences."
//   },
//   {
//     name: "Kumar Pal, COO",
//     role: " Chief Operation Officer (COO).",
//     imageUrl: "https://edulab.in/wp-content/uploads/2022/08/1516638761860.jpg",
//     bio: "Designer with an eye for detail and a love for crafting intuitive designs."
//   },
//   // Add more team members as needed
// ];

// const Teams = () => {
//   return (
//     <Box py={10} px={6} bg={useColorModeValue("gray.50", "gray.800")}>
//       <Heading textAlign="center" mb={12} color={useColorModeValue("gray.800", "gray.100")}>
//         Meet Our Team
//       </Heading>

//       <VStack spacing={8}>
//         {teamData.map((member, index) => (
//           <Flex
//             key={index}
//             w="full"
//             maxW="4xl"
//             bg={useColorModeValue("white", "gray.700")}
//             boxShadow="md"
//             rounded="lg"
//             overflow="hidden"
//             p={6}
//             direction={{ base: "column", md: "row" }}
//             align="center"
//             _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
//             transition="all 0.3s"
//           >
//             <Image
//               src={member.imageUrl}
//               alt={member.name}
//               w={{ base: "full", md: "200px" }}
//               h={{ base: "200px", md: "full" }}
//               objectFit="cover"
//               flexShrink={0}
//               mr={{ md: 6 }}
//               mb={{ base: 4, md: 0 }}
//               rounded="lg"
//             />
//             <VStack align="start" spacing={4}>
//               <Heading fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
//                 {member.name}
//               </Heading>
//               <Text fontSize="lg" fontWeight="bold" color={useColorModeValue("purple.600", "purple.300")}>
//                 {member.role}
//               </Text>
//               <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
//                 {member.bio}
//               </Text>
//             </VStack>
//           </Flex>
//         ))}
//       </VStack>
//     </Box>
//   );
// };

export  {Teams};
