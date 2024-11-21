import {
  Box,
  Text,
  Heading,
  Flex,
  Stack,
  Image,
  useBreakpointValue,
  UnorderedList,
  ListItem,
  Button,
  Container,
  VStack,
} from "@chakra-ui/react";
import { AssessmentCard } from "../components/AssessmentCard";
import { ShimmerButtonDemo } from "../components/ShimmerButtonDemo";
const data1 = [
  {
    title:
      "Kadal's AI-Powered Auto Grading System - Save Time, Increase Accuracy.",
    para: "Leveraging Kadal, LearningMate's AI platform, we've been working on an AI-powered autograding tool. This tool helps with the essay evaluation process. It smartly assesses essay content against pre-defined rubrics, giving detailed feedback highlighting trends and weaknesses, and helping students evaluate their writing.",
    benifits: [
      "Enhanced Evaluation Process: Automatically grade essays with a high level of precision.",
      "Detailed, Objective Feedback: Generate feedback highlighting strengths and improvement areas. Spend more time focusing on student growth and engagement.",
      "Save Time: Save valuable time with automated grading. Focus more on teaching and less on administrative tasks.",
      "Immediate Insight: Give your students instant feedback.",
    ],
    pic: "../images/ai-with-laptop.jpg",
  },
  {
    title: "AI-Powered Assessment Generator - A New Way to Create Assessments",
    para: "TCreating high-quality assessments is time-consuming and challenging. Our new AI-powered assessment generator will fundamentally change how educators and curriculum developers craft assessments. Our tool automates the entire process, giving you the power to customize your assessments based on academic standards and specific learning objectives.",
    benifits: [
      "Simplified Assessment Creation: Generate well-crafted questions that thoroughly evaluate students' understanding. The AI-driven process saves you time, allowing you to focus more on teaching and less on the logistics of test creation.",
      "Detailed Explanations and Feedback: Each answer is supported by clear, context-rich explanations, which help deepen the student's understanding of the material.",
      "Alignment with Academic Standards: Ensure every question aligns with academic standards and learning objectives.",
      "AI-Driven Personalization: Use AI to tailor assessments based on specific cognitive levels and competencies.",
      "Built-In Safety Guardrails: Our pre-trained AI model incorporates safety measures to ensure the generated content is appropriate and aligned with educational best practices.",
    ],
    pic: "../images/ai-with-laptop.jpg",
  },

  {
    title: "Bloom's-Based AI Question and Answer Analysis Tool",
    para: "The hierarchical structure encourages moving from lower-order thinking skills (like remembering and understanding) to higher-order thinking skills (like analyzing, evaluating, and creating). It's widely used in education to guide curriculum development, teaching methods, and assessments.Our Bloom' s-Based AI Question-Answer Analysis Tool is designed to give educators the power to analyze student responses using Bloom's Taxonomy.",
    benifits: [
      "Automated Cognitive Analysis: Categorize questions and answers according to Bloom's six cognitive levels, ensuring each response is evaluated based on the depth of understanding required.",
      "Personalized Learning Insights: Receive detailed feedback on the objectives met and a justification for each analysis.",
      "Better Education Outcomes: By aligning assessments with Bloom's Taxonomy, educators can more effectively guide students through the stages of cognitive development.",
      "Ease of Use: With intuitive setup options--like selecting the appropriate language model, adjusting the temperature, and refining the input prompt--our tool is user-friendly, making advanced educational assessment accessible to all educators.",
    ],
    pic: "../images/ai-with-laptop.jpg",
  },
  {
    title: "What even is Bloom's Taxonomy anyway?",
    para: "Bloom's Taxonomy is a framework for categorizing educational goals, developed by Benjamin Bloom and his colleagues in the 1950s. It classifies learning objectives into different levels of complexity and specifically, helping educators design and assess educational activities.",
    benifits: [
      "Remembering: The basic level is focused on recalling facts and basic concepts (e.g., memorizing dates or terms).",
      "Understanding: Involves grasping the meaning of information (e.g., explaining concepts in your own words).",
      "Applying: The ability to use knowledge in new situations (e.g., solving problems using learned techniques).",
      "Analyzing: Breaking down information into components to understand its structure (e.g., comparing and contrasting ideas",
      "Evaluating: Making judgments based on criteria and standards (e.g., critiquing an argument).",
      "Creating: The highest level involves generating new ideas or products (e.g., designing an original project).",
    ],
    pic: "../images/bloom.png",
  },
];



const AssessmentTool = () => {
  const imageSize = useBreakpointValue({ base: "90%", lg: "50%" });
  const textAlign = useBreakpointValue({
    base: "center",
    sm: "center",
    md: "left",
  });

  return (
    <Box display={"flex"} flexDirection={"column"} mt={"70px"} width={"100%"}>
      <Box>
        <Box
          bg="#014d7e"
          color="white"
          // border={"2px solid red"}
          // p={{ base: 6, md: 7 }}
          pb={"40px"}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            mb={8}
            gap={"20px"}
            border={"2px solid #014d7e"}
            width={{ base: "96%", md: "94%" }}
            margin={"auto"}
          >
            {/* _hover={{ transform: "scale(1.03)" }}  */}
            <Stack align={textAlign}>
              <Heading
                as="h1"
                // size="3xl"
                fontSize={["5xl", "5xl", "6xl", "6xl"]}
                lineHeight="shorter" // Adjust as needed, e.g., 'shorter', 'base', 'tall', etc.
                letterSpacing="wide"
                textAlign={textAlign}
                width={"95%"}
                margin={"auto"}
                // border={"2px solid red"}
                pt={4}
              >
                AI Assessment Tools for Educators
              </Heading>
              <Text
                width={"94%"}
                pt={"2"}
                margin={"auto"}
                fontSize={["2xl", "2xl", "3xl", "3xl"]}
                fontWeight="bold"
                textAlign={textAlign}
                // border={"2px solid red"}
              >
                Streamline student evaluations, personalize assessments, and gain actionable insights with AI-driven tools. 
              </Text>
              <Box
                pt={"2"}
                width="94%"
                margin="auto"
                // border="2px solid red"
                display="flex"
                justifyContent={{
                  base: "center",
                  sm: "center",
                  md: "flex-start",
                }}
                alignItems="center"
              >
                <ShimmerButtonDemo name="Start For Free" path="/questionForm" />
              </Box>
            </Stack>

            <Image
              src="../images/ai-with-laptop.jpg" // Replace with your image source
              alt="AI Content Tools"
              boxSize={imageSize}
              mt={{ base: 6, md: 7 }}
              borderRadius={"10px"}
            />
          </Flex>
        </Box>
        <Box
          bg="#f2f2f2"
          color="gray.800"
          // p={{ base: 6, md: 7 }}
          // textAlign={textAlign}
          mt={"10px"}
          // border={"2px solid red"}
        >
          <Text
            fontSize={["2xl", "2xl", "3xl", "3xl"]}
            fontWeight="medium"
            textAlign={textAlign}
            color={"gray.500"}
            width={"94%"}
            margin={"auto"}
            pt={"30px"}
            pb={"30px"}
          >
            Learn how LearningMate's AI assessment tools save time, improve
            feedback, and align with academic standards, helping educators focus
            on student growth..
          </Text>
        </Box>
        <Box bg={"#ffffff"} boxShadow={"lg"} >
          <Box color={"gray.500"} width={"94%"} margin={"auto"} pb={"20px"} s>
            <Heading
              as="h1"
              fontSize={["4xl", "4xl", "5xl", "5xl"]}
              pt={"30px"}
              pb={"20px"}
              fontWeight={"bold"}
              textAlign={textAlign}
            >
              AI-Powered Assessment Tools for Efficient and Effective Grading
            </Heading>
            <Box
              fontSize="xl"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              fontWeight={"medium"}
              textAlign={textAlign}
            >
              <Text pb={"20px"}>
                At Edugen, we pride ourselves on being entrepreneurial. We
                actively encourage our teams to innovate, try new things, and
                push the boundaries of what is considered possible. Lately,
                we've been particularly excited about how AI can help educators
                focus and amplify their efforts. When we say it's our mission to
                give everyone, everywhere, access to a good education, we mean
                it.
              </Text>
              <Text pb={"20px"}>
                Assessments often present a significant challenge for educators
                as they struggle to find the time to grade essay after essay.
                Many are required to bring their work home at night, adding to
                teachers' already strained time and energy constraints.{" "}
              </Text>
              <Text pb={"20px"}>
                However, some of our recently developed AI assessment tools
                could change the game entirely. Are we entering a golden era for
                teachers, where their evenings are free again? Where the
                constant demands of assessments are finally relieved? We think
                so.ere's what we've been working on regarding assessments and
                AI.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} margin={"auto"} pt={"30px"}>
          {data1 &&
            data1.map((data, index) => (
              <AssessmentCard
                key={index}
                data={data}
                boxShadow={index % 2 !== 0 ? "lg" : "none"}
                backgroundColor={index % 2 !== 0 ? "#f2f2f2" : "white"}
              />
            ))}
        </Box>
        <Box>
          <Box>
            <Box>
              {/* Heading */}
              <VStack
                spacing={8}
                align="center"
                color={"gray.500"}
                fontWeight={"medium"}
              >
                <Heading
                  as="h1"
                  fontSize={["4xl", "4xl", "4xl", "4xl"]}
                  pt={"35px"}
                  width={{ base: "98%", md: "93%" }}
                  margin={"auto"}
                  textAlign={textAlign}
                >
                  How will Edugen generate your quiz?
                </Heading>

                <Box>
                  <Text
                    fontSize={["xl", "xl", "2xl", "2xl"]}
                    width={"92%"}
                    margin={"auto"}
                    fontWeight={"medium"}
                    textAlign={textAlign}
                  >
                    Now Edugen has the ability to generate quizzes for a
                    specific level of Bloom's Taxuonomy, introducing a whole
                    slew of great opportunities to create some unique and
                    high-performing quizzes.
                  </Text>
                </Box>

                {/* Steps Section */}
                <Box
                  w="93%"
                  margin={"auto"}
                  p={5}
                  borderRadius="md"
                  boxShadow="lg"
                  // border={"1px solid white"}

                  transition="transform 0.3s ease" // Smooth transition
                  _hover={{ transform: "scale(1.02)" }} // Slight scaling effect
                >
                  <Stack spacing={4} fontWeight={"medium"}>
                    <Box>
                      <Heading
                        as="h1"
                        size="md"
                        textDecoration={"underline"}
                        color={"blue.600"}
                        transition="color 0.3s ease" // Transition for color change
                        _hover={{ color: "blue.600" }} // Hover effect on heading
                      >
                        Step 1:
                      </Heading>
                      <Text
                        fontWeight={"medium"}
                        transition="transform 0.1s ease"
                        _hover={{ transform: "scale(1.01)" }}
                        // fontStyle={"italic"}
                        fontSize={"xl"}
                      >
                        First, you insert a passage or piece of text into
                        Edugen, or even upload a text file. Then you select what
                        type of Bloom's Taxonomy level you want to create a quiz
                        for.
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
                      <Text
                        fontWeight={"medium"}
                        transition="transform 0.1s ease"
                        _hover={{ transform: "scale(1.01)" }}
                        // fontStyle={"italic"}
                        fontSize={"xl"}
                      >
                        Once the AI has understood your passage it will then
                        generate quiz questions based on your selected level.
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
                      <Text
                        transition="transform 0.1s ease"
                        _hover={{ transform: "scale(1.01)" }}
                        // fontStyle={"italic"}
                        fontSize={"xl"}
                        fontWeight={"medium"}
                      >
                        Afterward, you can edit each quiz question and download
                        the quiz in your own format of choosing. Edugen even
                        supports exporting quizzes in industry standard formats
                        and various platforms like AIKEN and RESPONDUS.
                      </Text>
                    </Box>
                  </Stack>
                </Box>
              </VStack>
            </Box>
          </Box>
          <Box pt={"30px"} width={"100%"}  pb={"30px"}>
            {/* Header Section */}
            <Box>
              <Heading
                as="h1"
                fontSize={["4xl", "4xl", "4xl", "4xl"]}
                pb={"30px"}
                pt={"30px"}
                color={"#757f94"}
                fontWeight={"bold"}
                width={"94%"}
                margin={"auto"}
                textAlign={textAlign}
              >
                Want to create quizzes that target specific levels of Bloom's
                Taxonomy? Use Edugen!
              </Heading>
              <Text
                fontSize={"xl"}
                fontWeight={"medium"}
                color={"gray.500"}
                pb={5}
                width={"93%"}
                margin={"auto"}
                textAlign={textAlign}
              >
                We understand the hassle of formulating quizzes for student
                tests that need to be unique and have to fall on various levels
                of Bloom's Taxonomy for an ideal learning experience. Sometimes
                creating a single quiz can take days of work and consume time
                that could be better utilized elsewhere.
              </Text>
            </Box>

            <Box width={"93%"} margin={"auto"} textAlign={textAlign}>
              <Text
                fontSize={"xl"}
                fontWeight={"medium"}
                color={"gray.500"}
                pb={5}
                textAlign={textAlign}
              >
                This is why we have done the work of creating an effective quiz
                maker that leverages the power of modern tech and AI to generate
                effective Bloom's Taxonomy quizzes in a matter of seconds.
              </Text>
              <Text
                fontSize={"xl"}
                fontWeight={"medium"}
                color={"gray.500"}
                textAlign={textAlign}
              >
                Previously, a task that took hours or maybe days to complete can
                now be finished in minutes with the help of Edugen.
              </Text>
            </Box>

           
          </Box>
        </Box>
        <Box bg={"#004789"} pt={"50px"} pb={"30px"}>
          <Box
            width={"90%"}
            margin={"auto"}
            color={"white"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            alignItems={"flex-start"}
          >
            <Heading as="h1" size="2xl" pb={"30px"} fontWeight={"bold"}>
              Let's have a conversation...
            </Heading>
            <Box width={"100%"} margin={"auto"}>
              <Text
                pb={"10px"}
                //  fontSize="3xl"
                fontSize={{
                  base: "xl",
                  sm: "xl",
                  md: "3xl",
                  lg: "3xl",
                  xl: "3xl",
                }}
                fontWeight="medium"
              >
                {" "}
                Edugen has been leading the charge in large-scale education
                technology innovation. To learn more about our AI-enabled
                solutions and our human-in-the-loop approach to AI, contact us.
              </Text>
            </Box>
            <ShimmerButtonDemo name="Contact Us" path="/contacts" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { AssessmentTool };
