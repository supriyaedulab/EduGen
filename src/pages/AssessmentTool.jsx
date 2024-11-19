
import {
    Box,
    Text,
    Heading,
    Flex,
    Stack,
    Image,
    useBreakpointValue,
    UnorderedList, ListItem,
    Button, Container, VStack
} from "@chakra-ui/react";
import { AssessmentCard } from "../components/AssessmentCard";
import { ShimmerButtonDemo } from "../components/ShimmerButtonDemo";
const data1 = [
    {
        title: "AI-Powered Lesson Content Tagging Tool",
        para: "Edugen's AI-powered Lesson Content Tagging Tool simplifies the process of aligning content with standards. Whether you upload your lesson content or use pre-loaded files, our tool provides a customized analysis to ensure you meet the necessary educational standards.",
        benifits: ["Customizable Analysis: Upload your lesson content and learning standards for a tailored analysis that identifies how well your material aligns with the required competencies.", "Detailed Reporting: Receive a detailed report highlighting the degree of match, matched competencies, and areas that may need further attention.", "Insights: Understand why certain content matches or doesn't match with specific standards, allowing you to refine your lessons for better alignment."],
        pic: "../images/ai-with-laptop.jpg"

    },
    {
        title: "AI-Powered Topic Content Enhancement Tool",
        para: "This tool helps ensure your content fully addresses all cognitive levels. Edugen's AI-powered topic content enhancement tool is designed to help educators identify gaps in their materials and provide suggestions to help content coverage across Bloom's Taxonomy.",
        benifits: ["Content Analysis: Upload your content in various formats, including PDF, text, and docx, and let the tool analyze it against Bloom's objectives to identify any gaps.", "Targeted Enhancements: Receive detailed suggestions to fill gaps with links to high-quality content sources.", "Content Quality Assurance: Ensure your educational materials are thorough and well-rounded."],
        pic: "../images/ai-with-laptop.jpg"

    },
    {
        title: "Multilingual Content with Edugen's AI Language Translation Tool",
        para: "Edugen's AI Language Translation Tool, part of our innovative Edugen platform, is designed to make content translation simple and efficient. Quickly translate text from one language to another, choosing from 13 available languages.",
        benifits: ["User-Friendly Interface: With a straightforward setup process, you can select your source and target languages and choose the optimal translation model.", "High-Quality Translations: Achieve accurate and context-aware translations that maintain the integrity of your meaning across languages.", "Time Efficiency: Quickly translate and download your content, saving valuable time and ensuring consistent messaging across multiple languages.", "Content Enhancement: Perfect for businesses and educators alike, this tool supports content expansion and localization, making your materials accessible to a broader audience."],
        pic: "../images/ai-with-laptop.jpg"

    },
    {
        title: "AI Content Paraphrasing Tool",
        para: "In content creation, simplifying or rephrasing complex text is extremely useful. Edugen's content paraphrasing tool is designed for just that. Our goal is to give educators a powerful tool to help them rephrase, paraphrase, and refine existing content to better fit their needs.",
        benifits: ["Versatile Paraphrasing Options: Whether you need to simplify complex text or rephrase content, this tool provides a straightforward and effective solution.", "User-Friendly Interface: Simply upload your content, set your desired parameters, and let the AI do the heavy lifting. The tool will give that paraphrased text alongside the original for immediate use in your projects.", "Insights: Understand why certain content matches or doesn't match with specific standards, allowing you to refine your lessons for better alignment."],
        pic: "../images/ai-with-laptop.jpg"

    }
]

const AssessmentTool = () => {
    const imageSize = useBreakpointValue({ base: "90%",lg:"50%" });
    const textAlign = useBreakpointValue({ base: "center", sm: "center", md: "left" });

    return (
        <Box display={"flex"} flexDirection={"column"} mt={"70px"} width={"100%"} >
            <Box >
                <Box
                    bg="#014d7e"
                    color="white"
                    // border={"2px solid red"}
                    // p={{ base: 6, md: 7 }}
                    pb={"40px"}
                >
                    <Flex
                        direction={{ base: "column",lg:"row" }}
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
                            <Heading as="h1" 
                            // size="3xl"
                            fontSize={["5xl","5xl","6xl", "6xl"]}
                                lineHeight="shorter" // Adjust as needed, e.g., 'shorter', 'base', 'tall', etc.
                                letterSpacing="wide"
                                textAlign={textAlign}
                                width={"95%"} margin={"auto"}
                                // border={"2px solid red"}
                                pt={4}
                            >
                                AI Content Tools For Educators
                            </Heading>
                            <Text width={"94%"} pt={"2"} margin={"auto"} fontSize={["2xl","2xl","3xl", "3xl"]} fontWeight="bold" textAlign={textAlign} 
                            // border={"2px solid red"}
                            >
                                Automate question creation, enhance knowledge checks, and save hours with intelligent AI solutions.
                            </Text>
                            <Box
                            pt={"2"}
                                width="94%"
                                margin="auto"
                                // border="2px solid red"
                                display="flex"
                                justifyContent={{ base: "center", sm: "center", md: "flex-start" }}
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
                        fontSize={["2xl","2xl","3xl", "3xl"]} fontWeight="medium" fontStyle={"italic"} textAlign={textAlign} color={"gray.500"} width={"94%"}
                        margin={"auto"} pt={"30px"} pb={"30px"}>
                        Tag, enhance, paraphrase, and translate educational materials while
                        upholding high standards with our Edugen AI content creation tools.
                    </Text>

                </Box>
                <Box bg={"#ffffff"} boxShadow={"lg"}>
                    <Box color={"gray.500"} width={"94%"}
                        margin={"auto"}>
                        <Heading as="h1" fontSize={["4xl","4xl","5xl", "5xl"]}pt={"30px"} pb={"20px"} fontWeight={"bold"}textAlign={textAlign} >
                            AI Content Tools for Educators
                        </Heading>
                        <Box fontSize="xl" display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} fontWeight={"medium"} fontStyle={"italic"}textAlign={textAlign}>
                            <Text pb={"20px"}>At Edugen, we enjoy a good challenge. We thrive when pushing the boundaries of innovation. Recently, we’ve been particularly excited about how AI can help educators enhance their content-creation efforts.</Text>
                            <Text pb={"20px"}>Creating and refining educational content and curriculum can be daunting for educators, as they often are required to do it in the cracks of their daily schedules. Many find themselves working at night. </Text>
                            <Text pb={"20px"}>We want educators to have more time on their hands. Our new AI content tools are poised to transform this process entirely.Here’s what we’ve been working on regarding content and AI.</Text>
                           
                        </Box>
                    </Box>
                </Box>


                <Box width={"100%"}
                        margin={"auto"}pt={"30px"}>
                    {data1 && data1.map((data, index) => (
                        <AssessmentCard key={index} data={data} boxShadow={index % 2 !== 0 ? 'lg' : 'none'} backgroundColor={index % 2 !== 0 ? '#f2f2f2' : 'white'} />
                    ))}
                </Box >
                <Box >
                    <Box>
                        <Box >

                            {/* Heading */}
                            <VStack spacing={8} align="center" color={"gray.500"} fontWeight={"medium"} >
                                <Heading as="h1" fontSize={["4xl","4xl","4xl", "4xl"]}pt={"35px"} width={{base:"98%",md:"93%"}} margin={"auto"} textAlign={textAlign} >
                                    How will Edugen generate your quiz?
                                </Heading>

                                <Box>
                                    <Text fontSize={["xl","2xl","3xl", "3xl"]}  width={"92%"} margin={"auto"} fontWeight={"medium"} fontStyle={"italic"}textAlign={textAlign}>
                                        Now Edugen has the ability to generate quizzes for a specific level of Bloom's
                                        Taxuonomy, introducing a whole slew of great opportunities to create some unique
                                        and high-performing quizzes.
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

                                    transition="transform 0.3s ease"  // Smooth transition
                                    _hover={{ transform: "scale(1.02)" }}  // Slight scaling effect
                                >
                                    <Stack spacing={4} fontWeight={"medium"} >
                                        <Box>
                                            <Heading
                                                as="h1"
                                                size="md"
                                                textDecoration={"underline"}
                                                color={"blue.600"}
                                                transition="color 0.3s ease"  // Transition for color change
                                                _hover={{ color: "blue.600" }}  // Hover effect on heading
                                            >
                                                Step 1:
                                            </Heading>
                                            <Text fontWeight={"medium"} transition="transform 0.1s ease" _hover={{ transform: "scale(1.01)" }} fontStyle={"italic"} fontSize={"xl"}>
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
                                            <Text fontWeight={"medium"} transition="transform 0.1s ease" _hover={{ transform: "scale(1.01)" }} fontStyle={"italic"} fontSize={"xl"}>
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
                                            <Text transition="transform 0.1s ease" _hover={{ transform: "scale(1.01)" }} fontStyle={"italic"} fontSize={"xl"} fontWeight={"medium"}>
                                                Afterward, you can edit each quiz question and download the quiz in your own
                                                format of choosing. Edugen even supports exporting quizzes in industry
                                                standard formats and various platforms like AIKEN and RESPONDUS.
                                            </Text>
                                        </Box>
                                    </Stack>
                                </Box>
                            </VStack>

                        </Box>
                    </Box>
                    <Box bg={"#f2f2f2"} mt={"30px"} width={"100%"} >

                        {/* Header Section */}
                        <Box  >
                            <Heading as="h1" fontSize={["4xl","4xl","4xl", "4xl"]} pb={"30px"} pt={"30px"} color={"#757f94"} fontWeight={"bold"} width={"94%"} margin={"auto"} textAlign={textAlign} >
                                Want to create quizzes that target specific levels of Bloom's Taxonomy? Use Edugen!
                            </Heading>
                            <Text fontStyle={"italic"} fontSize={"xl"} fontWeight={"medium"} color={"gray.500"} pb={5}  width={"93%"} margin={"auto"}textAlign={textAlign}>
                                We understand the hassle of formulating quizzes for student tests that need to be unique and
                                have to fall on various levels of Bloom's Taxonomy for an ideal learning experience.
                                Sometimes creating a single quiz can take days of work and consume time that could be better utilized elsewhere.
                            </Text>
                        </Box>

                        <Box width={"93%"} margin={"auto"}textAlign={textAlign}>
                            <Text fontStyle={"italic"} fontSize={"xl"} fontWeight={"medium"} color={"gray.500"} pb={5}textAlign={textAlign}>
                                This is why we have done the work of creating an effective quiz maker that leverages the power of
                                modern tech and AI to generate effective Bloom's Taxonomy quizzes in a matter of seconds.
                            </Text>
                            <Text fontStyle={"italic"} fontSize={"xl"} fontWeight={"medium"} color={"gray.500"}textAlign={textAlign}>
                                Previously, a task that took hours or maybe days to complete can now be finished in minutes with the help of Edugen.
                            </Text>

                        </Box>
                        {/* Content Section */}
                        <Box pb={"20px"} width={"94%"} margin={"auto"}textAlign={textAlign}>
                            <Heading as="h1"fontSize={["4xl","4xl","4xl", "4xl"]}  width={{base:"100%",md:"100%"}} pb={"20px"} pt={"15px"} color={"#757f94"} fontWeight={"bold"} >
                                What even is Bloom's Taxonomy anyway?
                            </Heading>
                            <Stack
                                direction={{ base: "column", md: "column",lg:"row" }}
                                spacing={6}
                                alignItems="center"
                            >
                                {/* Left side with description */}
                                <Box  fontSize={"18px"} fontWeight={"medium"} color={"gray.500"} width={{ base: "99%", sm: "99%", md: "99%", lg: "50%", xl: "50%", '2xl': "50%" }}textAlign={textAlign} >


                                    {/* Introduction */}
                                    <Text pt={"10px"}>
                                        What is Bloom's Taxonomy in the first place? Well, it is kind of like a guide for how we learn stuff and think about things. Imagine it as a set of stairs, each step taking you deeper into understanding.
                                    </Text>

                                    {/* Content Section */}
                                    <Text pt={"10px"}>
                                        So, starting at the bottom step, we have "Remembering." This is when you can recall facts, like your phone number or the name of your favorite movie.
                                    </Text>
                                    <Text pt={"10px"}>
                                        Move up one step, and you hit "Understanding." Now, it's not just about remembering; it's about really getting what stuff means. Think of it like figuring out the plot of a movie – you're not just reciting it; you're understanding it.
                                    </Text>
                                    <Text pt={"10px"}>
                                        Next up, we've got "Applying." This is where you take what you know and put it to practical use. It's like knowing how to bake and then actually making some delicious cookies.
                                    </Text>
                                    <Text pt={"10px"}>
                                        Climbing higher, we reach "Analyzing." Here, you're like a detective, breaking things into pieces to see how they fit together. It's like solving a mystery.
                                    </Text>
                                    <Text pt={"10px"}>
                                        "Evaluating" is a bit like being a judge on a talent show. You're deciding what's good or not-so-good, based on reasons and evidence.
                                    </Text>
                                    <Text pt={"10px"}>
                                        Finally, we've got the top step – "Creating." This is where you're the artist, using what you've learned to make something brand new. It's like writing a story or composing a song.
                                    </Text>



                                </Box>

                                {/* Right side with image or quiz preview */}
                                <Box borderRadius="md"
                                    boxShadow="md"
                                    width={{ base: "99%", sm: "99%", md: "99%", lg: "50%", xl: "50%", '2xl': "50%" }} margin={"auto"}>
                                    <Image
                                        src="../images/bloom.png" // Replace with your quiz preview image
                                        alt="Quiz Preview"
                                        height={"full"}
                                        width={"full"}
                                    />
                                </Box>
                            </Stack>
                        </Box>

                    </Box>
                </Box>
                <Box bg={"#004789"} pt={"50px"} pb={"30px"} >
                    <Box width={"90%"} margin={"auto"} color={"white"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"flex-start"}>
                        <Heading as="h1" size="2xl" pb={"30px"} fontWeight={"bold"} >Let's have a conversation...</Heading>
                        <Box width={"100%"} margin={"auto"}>
                            <Text pb={"10px"}
                                //  fontSize="3xl" 
                                fontSize={{ base: "xl", sm: "xl", md: "3xl", lg: "3xl", xl: "3xl" }}
                                fontWeight="medium" fontStyle={"italic"}> Edugen has been leading the charge in large-scale education technology innovation. To learn more about our AI-enabled solutions and our human-in-the-loop approach to AI, contact us.</Text>
                        </Box>
                        <ShimmerButtonDemo name="Contact Us" path="/contacts" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export { AssessmentTool };
