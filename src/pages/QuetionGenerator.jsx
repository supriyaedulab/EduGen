import React, { useState, useCallback } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  RadioGroup,
  Radio,
  Stack,
  Text,
  VStack,
  useToast,
  Flex,
  Heading,
  useColorModeValue,
  Container, Image
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { ShimmerButtonDemo } from '../components/ShimmerButtonDemo';

function QuestionGeneratorForm() {


  return (


    <>
      <Box bg="#011e3c" minH="100vh" p={6} textAlign="center">
        <Box
          width="79%"
          minH="100vh"
          margin="auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"

        >
          <Heading
            as="h1"
            fontSize={["4xl", "5xl"]}
            fontWeight="bold"
            color="blue.500"
            margin="15px"
            bgGradient="linear(to-r, cyan.500, pink.500)"
            bgClip="text"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            Generate MCQ Quizzes On a Specific
            <Text
              as="span"
              color="blue.500"
              display="block"
              mt="20px"
              bgGradient="linear(to-r, cyan.500, pink.500)"
              bgClip="text"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              Bloom's Taxonomy Level
            </Text>
          </Heading>

          <Text
            mt={4}
            fontSize={["sm", "md", "lg"]}
            color="white"
            margin="15px"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            It's time to say goodbye to the time-consuming process of creating tests and quizzes!
          </Text>

          <Text
            fontSize={["sm", "md", "lg"]}
            color="white"
            margin="15px"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            Meet Edugen! Transform any text into multiple choice questions tailored to different
            levels of Bloom's Taxonomy for diverse cognitive assessments!
          </Text>

          <ShimmerButtonDemo name="Get started for free" />
        </Box>
      </Box>
      <Box width={"100%"} >
        <Box >
          <Container maxW="container.lg" py={8} >
            {/* Header Section */}
            <Box my={8}>
              <Heading size="xl" mb={10} textAlign="center" mt={"50px"} color={"black"}>
                Want to create quizzes that target specific levels of Bloom's Taxonomy? Use Edugen!
              </Heading>
              <Text fontSize="md" color={"black"} fontWeight={"medium"}>
                We understand the hassle of formulating quizzes for student tests that need to be unique and
                have to fall on various levels of Bloom's Taxonomy for an ideal learning experience.
                Sometimes creating a single quiz can take days of work and consume time that could be better utilized elsewhere.
              </Text>
            </Box>

            <Box><Text fontSize="md" mb={4} fontWeight={"medium"}>
              This is why we have done the work of creating an effective quiz maker that leverages the power of
              modern tech and AI to generate effective Bloom's Taxonomy quizzes in a matter of seconds.
            </Text>
              <Text fontSize="md" mb={4} fontWeight={"medium"} >
                Previously, a task that took hours or maybe days to complete can now be finished in minutes with the help of Edugen.
              </Text></Box>
            {/* Content Section */}
            <Heading as="h1" size="xl" color={"black"} textAlign="center" mb={"50px"} mt={"50px"}>
              What even is Bloom's Taxonomy anyway?
            </Heading>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={6}
              alignItems="center"
            >
              {/* Left side with description */}
              <Box flex={1} textAlign="justify" fontWeight={"medium"}>


                {/* Introduction */}
                <Text fontSize="md" margin={"10px"}>
                  What is Bloom's Taxonomy in the first place? Well, it is kind of like a guide for how we learn stuff and think about things. Imagine it as a set of stairs, each step taking you deeper into understanding.
                </Text>

                {/* Content Section */}
                <Text fontSize="md" margin={"10px"}>
                  So, starting at the bottom step, we have "Remembering." This is when you can recall facts, like your phone number or the name of your favorite movie.
                </Text>
                <Text fontSize="md" margin={"10px"}>
                  Move up one step, and you hit "Understanding." Now, it's not just about remembering; it's about really getting what stuff means. Think of it like figuring out the plot of a movie – you're not just reciting it; you're understanding it.
                </Text>
                <Text fontSize="md" margin={"10px"}>
                  Next up, we've got "Applying." This is where you take what you know and put it to practical use. It's like knowing how to bake and then actually making some delicious cookies.
                </Text>
                <Text fontSize="md" margin={"10px"}>
                  Climbing higher, we reach "Analyzing." Here, you're like a detective, breaking things into pieces to see how they fit together. It's like solving a mystery.
                </Text>
                <Text fontSize="md" margin={"10px"}>
                  "Evaluating" is a bit like being a judge on a talent show. You're deciding what's good or not-so-good, based on reasons and evidence.
                </Text>
                <Text fontSize="md" margin={"10px"}>
                  Finally, we've got the top step – "Creating." This is where you're the artist, using what you've learned to make something brand new. It's like writing a story or composing a song.
                </Text>



              </Box>

              {/* Right side with image or quiz preview */}
              <Box flex={1} _hover={{ transform: "scale(1.07)" }} borderRadius="lg" padding={"20px"} bg={"linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}
                boxShadow="lg">
                <Image
                  src="../images/bloom.png" // Replace with your quiz preview image
                  alt="Quiz Preview"

                />
              </Box>
            </Stack>
          </Container>
        </Box>

        <Box >
          <Container maxW="container.md" py={4}>
            {/* Heading */}
            <VStack spacing={8} align="center">
              <Heading as="h1" size="xl" textAlign="center" color={"black"}>
                How will Edugen generate your quiz?
              </Heading>

              {/* Text Section */}
              <Box>
                <Text fontSize="md" textAlign="center" width={"97%"} margin={"auto"} fontWeight={"medium"}>
                  Now Edugen has the ability to generate quizzes for a specific level of Bloom's
                  Taxuonomy, introducing a whole slew of great opportunities to create some unique
                  and high-performing quizzes.
                </Text>
              </Box>

              {/* Steps Section */}
              <Box
                w="full"
                p={6}
                borderRadius="md"
                boxShadow="lg"
                mb={"20px"}
                // border={"1px solid white"}
                bg={"linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}
                transition="transform 0.3s ease"  // Smooth transition
                _hover={{ transform: "scale(1.03)" }}  // Slight scaling effect
              >
                <Stack spacing={4}>
                  <Box>
                    <Heading
                      as="h2"
                      size="md"
                      textDecoration={"underline"}
                      color={"blue.600"}
                      transition="color 0.3s ease"  // Transition for color change
                      _hover={{ color: "blue.600" }}  // Hover effect on heading
                    >
                      Step 1:
                    </Heading>
                    <Text fontWeight={"medium"} transition="transform 0.3s ease" _hover={{ transform: "scale(1.02)" }}>
                      First, you insert a passage or piece of text into Edugen, or even upload a
                      text file. Then you select what type of Bloom's Taxonomy level you want to
                      create a quiz for.
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h2"
                      size="md"
                      textDecoration={"underline"}
                      color={"blue.600"}
                      transition="color 0.3s ease"
                      _hover={{ color: "blue.600" }}
                    >
                      Step 2:
                    </Heading>
                    <Text fontWeight={"medium"} transition="transform 0.3s ease" _hover={{ transform: "scale(1.02)" }}>
                      Once the AI has understood your passage it will then generate quiz questions
                      based on your selected level.
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h2"
                      size="md"
                      textDecoration={"underline"}
                      color={"blue.600"}
                      transition="color 0.3s ease"
                      _hover={{ color: "blue.600" }}
                    >
                      Step 3:
                    </Heading>
                    <Text fontWeight={"medium"} transition="transform 0.3s ease" _hover={{ transform: "scale(1.02)" }}>
                      Afterward, you can edit each quiz question and download the quiz in your own
                      format of choosing. Edugen even supports exporting quizzes in industry
                      standard formats and various platforms like AIKEN and RESPONDUS.
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </VStack>
          </Container>
        </Box>
      </Box>
    </>

  );
}

export { QuestionGeneratorForm };
