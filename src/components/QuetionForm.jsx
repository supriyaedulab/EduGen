// import React, { useState, useCallback } from 'react';
// import {
//     Box,
//     Button,
//     FormControl,
//     FormLabel,
//     FormErrorMessage,
//     Input,
//     Select,
//     NumberInput,
//     NumberInputField,
//     RadioGroup,
//     Radio,
//     Stack,
//     Text,
//     VStack,
//     useToast,
//     Flex,
//     Heading,
//     useColorModeValue,
//     Container,
//     Image,
//     Icon
// } from '@chakra-ui/react';
// import { useDropzone } from 'react-dropzone';
// import { FaFileUpload } from 'react-icons/fa'; // Importing an icon for file upload
// import { ShimmerButtonDemo } from './ShimmerButtonDemo';

// function QuestionForm() {
//     const [formData, setFormData] = useState({
//         subjectName: '',
//         topicName: '',
//         difficulty: '',
//         numberOfQuestions: 1,
//         questionType: '',
//         document: null,
//     });

//     const [errors, setErrors] = useState({});
//     const toast = useToast();

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: files ? files[0] : value,
//         }));
//     };

//     const onDrop = useCallback((acceptedFiles) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             document: acceptedFiles[0],
//         }));
//     }, []);

//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//         onDrop,
//         accept: '.pdf, .docx, .pptx, .txt, .png, .jpg, .jpeg',
//         maxSize: 200 * 1024 * 1024,
//     });

//     const validate = () => {
//         let errors = {};
//         if (!formData.subjectName) {
//             errors.subjectName = 'Subject Name is required';
//         }
//         if (!formData.topicName) {
//             errors.topicName = 'Topic Name is required';
//         }
//         if (!formData.difficulty) {
//             errors.difficulty = 'Difficulty is required';
//         }
//         if (!formData.numberOfQuestions || formData.numberOfQuestions < 1) {
//             errors.numberOfQuestions = 'Number of Questions must be at least 1';
//         }
//         if (!formData.questionType) {
//             errors.questionType = 'Please choose the type of questions to generate';
//         }
//         if (formData.document) {
//             if (formData.document.size > 200 * 1024 * 1024) {
//                 errors.document = 'File size must be less than 200MB';
//             }
//             const allowedTypes = [
//                 'application/pdf',
//                 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//                 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
//                 'text/plain',
//                 'image/png',
//                 'image/jpeg',
//             ];
//             if (!allowedTypes.includes(formData.document.type)) {
//                 errors.document = 'Unsupported File Format';
//             }
//         }
//         setErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             toast({
//                 title: 'Question created successfully!',
//                 status: 'success',
//                 duration: 3000,
//                 isClosable: true,
//             });
//             console.log(formData);

//         }
//     };

//     return (

//         <Box color={"black"} width={"100%"} mb={"50px"} padding={"50PX"}>
//             <Box
//                 width={{ base: "85%", sm: "80%", md: "70%", lg: "70%", xl: "45%", '2xl': "40%" }}
//                 margin={"auto"}
//                 p={6}
//                 borderWidth={2}
//                 borderColor="gray.300"
//                 borderRadius="xl"
//                 boxShadow="lg"
//                 // bg={"linear-gradient(to right, #c8f9db 0%, #96bcfd 100%)"}
//                 opacity={"0.9"}
//             >
//                 <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb="4" color={"#011e3c"}>
//                     AI-Powered Question Generator
//                 </Text>
//                 <form onSubmit={handleSubmit}>
//                     <VStack spacing={4}>
//                         <FormControl isInvalid={errors.subjectName}>
//                             <FormLabel fontSize="lg" color={"#011e3c"}>Subject Name</FormLabel>
//                             <Input
//                                 type="text"
//                                 name="subjectName"
//                                 value={formData.subjectName}
//                                 onChange={handleChange}
//                                 variant="filled"
//                                 focusBorderColor="blue.300"
//                                 placeholder="Enter Subject Name"
//                                 fontSize="md"
//                             //   _placeholder={{ color: 'black' }} // Placeholder color
//                             />
//                             <FormErrorMessage>{errors.subjectName}</FormErrorMessage>
//                         </FormControl>

//                         <FormControl isInvalid={errors.topicName}>
//                             <FormLabel fontSize="lg" color={"#011e3c"}>Topic Name</FormLabel>
//                             <Input
//                                 type="text"
//                                 name="topicName"
//                                 value={formData.topicName}
//                                 onChange={handleChange}
//                                 variant="filled"
//                                 focusBorderColor="blue.300"
//                                 placeholder="Enter Topic Name"
//                                 fontSize="md"

//                             //   _placeholder={{ color: 'gray.300' }}
//                             />
//                             <FormErrorMessage>{errors.topicName}</FormErrorMessage>
//                         </FormControl>

//                         <FormControl isInvalid={errors.difficulty}>
//                             <FormLabel fontSize="lg" color={"#011e3c"}>Select Difficulty</FormLabel>
//                             <Select
//                                 name="difficulty"
//                                 value={formData.difficulty}
//                                 onChange={handleChange}
//                                 placeholder="Select Difficulty"
//                                 variant="filled"
//                                 focusBorderColor="blue.300"
//                                 fontSize="md"
//                             >
//                                 <option value="Easy">Easy</option>
//                                 <option value="Medium">Medium</option>
//                                 <option value="Hard">Hard</option>
//                             </Select>
//                             <FormErrorMessage>{errors.difficulty}</FormErrorMessage>
//                         </FormControl>

//                         <FormControl isInvalid={errors.numberOfQuestions}>
//                             <FormLabel fontSize="lg" color={"#011e3c"}>Number of Questions</FormLabel>
//                             <NumberInput
//                                 min={1}
//                                 value={formData.numberOfQuestions}
//                                 onChange={(valueString) =>
//                                     setFormData({ ...formData, numberOfQuestions: Number(valueString) })
//                                 }
//                                 variant="filled"
//                             >
//                                 <NumberInputField name="numberOfQuestions" placeholder="Enter Number" fontSize="sm" />
//                             </NumberInput>
//                             <FormErrorMessage>{errors.numberOfQuestions}</FormErrorMessage>
//                         </FormControl>

//                         <FormControl isInvalid={errors.questionType}>
//                             <FormLabel fontSize="lg"color={"#011e3c"}>Choose the Type of Questions to Generate:</FormLabel>
//                             <RadioGroup
//                                 name="questionType"
//                                 value={formData.questionType}
//                                 onChange={(value) => setFormData({ ...formData, questionType: value })}
//                             >
//                                 <Stack spacing={3}>
//                                     <Radio value="onlyQuestion" colorScheme="blue">
//                                         <Text fontSize="lg" fontWeight="medium" color={"black"}>Generate Only Question</Text>
//                                     </Radio>
//                                     <Radio value="questionWithAnswer" colorScheme="blue">
//                                         <Text fontSize="lg" fontWeight="medium" color={"black"}>Generate Question with Answer</Text>
//                                     </Radio>
//                                     <Radio value="questionWithAnswerAndExplanation" colorScheme="blue" >
//                                         <Text fontSize="lg" fontWeight="medium" color={"black"} >Generate Question with Answer and Explanation</Text>
//                                     </Radio>
//                                     <Radio value="multipleChoice" colorScheme="blue">
//                                         <Text fontSize="lg" fontWeight="medium" color={"black"}>Generate Question with Multiple Choice</Text>
//                                     </Radio>
//                                 </Stack>
//                             </RadioGroup>

//                             <FormErrorMessage>{errors.questionType}</FormErrorMessage>
//                         </FormControl>

//                         <FormControl isInvalid={errors.document}>
//                             <FormLabel >
//                                 <Box display={"flex"} gap={"5px"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row", '2xl': "row" }}>
//                                     <Text fontSize="lg" color={"#011e3c"} fontWeight="bold">Upload a Document (Limit 200MB)</Text>
//                                     <Text fontSize="sm" color={"#011e3c"} fontWeight="bold">(jpg,pdf,jpge,txt,png)</Text>
//                                 </Box>
//                             </FormLabel>
//                             <Box
//                                 {...getRootProps()}
//                                 border="2px dashed"
//                                 borderColor={useColorModeValue('gray.300', 'gray.600')}
//                                 p="4"
//                                 rounded="md"
//                                 cursor="pointer"
//                                 textAlign="center"
//                                 _hover={{ bg: useColorModeValue('gray.400', 'gray.900'), transition: 'background 0.2s' }}
//                             >
//                                 <Input {...getInputProps()} style={{ display: 'none' }} />
//                                 <Icon as={FaFileUpload} boxSize={8} mb={2} />
//                                 {isDragActive ? (
//                                     <Text fontSize="sm" color="gray.500">Drop the file here...</Text>
//                                 ) : (
//                                     <Text fontSize="md" color="gray.800" fontWeight={"bold"}>
//                                         {formData.document
//                                             ? `Selected File: ${formData.document.name}`
//                                             : 'import from file or url'}
//                                     </Text>
//                                 )}
//                             </Box>
//                             <FormErrorMessage>{errors.document}</FormErrorMessage>
//                         </FormControl>
//                         <Box>
//                             <ShimmerButtonDemo name={"Generate Questions"} />
//                         </Box>
//                     </VStack>
//                 </form>
//             </Box>
//         </Box>
//     );
// }

// export { QuestionForm };


// https://chatbot.edulab.in/generate-question/  post

// https://chatbot.edulab.in/       get




import React, { useState, useCallback } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Select,
    NumberInput,
    NumberInputField,
    RadioGroup,
    useColorModeValue,
    Radio,
    Stack,
    Text,
    VStack,
    useToast,
    Icon,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from 'react-icons/fa';
import { ShimmerButtonDemo } from './ShimmerButtonDemo';
import axios from 'axios';

function QuestionForm() {
    const [formData, setFormData] = useState({
        subjectName: '',
        topicName: '',
        difficulty: '',
        numberOfQuestions: 1,
        questionType: '',
        document: null,
    });

    const [errors, setErrors] = useState({});
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const onDrop = useCallback((acceptedFiles) => {
        setFormData((prevData) => ({
            ...prevData,
            document: acceptedFiles[0],
        }));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: '.pdf, .docx, .pptx, .txt, .png, .jpg, .jpeg',
        maxSize: 200 * 1024 * 1024,
    });

    const validate = () => {
        let errors = {};
        if (!formData.subjectName) {
            errors.subjectName = 'Subject Name is required';
        }
        if (!formData.topicName) {
            errors.topicName = 'Topic Name is required';
        }
        if (!formData.difficulty) {
            errors.difficulty = 'Difficulty is required';
        }
        if (!formData.numberOfQuestions || formData.numberOfQuestions < 1) {
            errors.numberOfQuestions = 'Number of Questions must be at least 1';
        }
        if (!formData.questionType) {
            errors.questionType = 'Please choose the type of questions to generate';
        }
        if (formData.document) {
            if (formData.document.size > 200 * 1024 * 1024) {
                errors.document = 'File size must be less than 200MB';
            }
            const allowedTypes = [
                'application/pdf',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'text/plain',
                'image/png',
                'image/jpeg',
            ];
            if (!allowedTypes.includes(formData.document.type)) {
                errors.document = 'Unsupported File Format';
            }
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const data = new FormData();
            data.append('subjectName', formData.subjectName);
            data.append('topicName', formData.topicName);
            data.append('difficulty', formData.difficulty);
            data.append('numberOfQuestions', formData.numberOfQuestions);
            data.append('questionType', formData.questionType);
            if (formData.document) {
                data.append('document', formData.document);
            }

            try {
                const response = await axios.post('https://chatbot.edulab.in/generate-question/', data);
                if (response.status === 200) {
                    toast({
                        title: 'Question created successfully!',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                    });
                    console.log(response.data);
                    console.log("api called")
                }
            } catch (error) {
                toast({
                    title: 'An error occurred',
                    description: error.response ? error.response.data : error.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        }
    };

    return (
        <Box color={"black"} width={"100%"}  padding={"50PX"}pt={"150px"}>
            <Box
                width={{ base: "85%", sm: "80%", md: "70%", lg: "70%", xl: "45%", '2xl': "40%" }}
                margin={"auto"}
                p={6}
                borderWidth={2}
                borderColor="gray.300"
                borderRadius="xl"
                boxShadow="lg"
                opacity={"0.9"}
            >
                <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb="4" color={"#011e3c"}>
                    AI-Powered Question Generator
                </Text>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl isInvalid={errors.subjectName}>
                            <FormLabel fontSize="lg" color={"#011e3c"}>Subject Name</FormLabel>
                            <Input
                                type="text"
                                name="subjectName"
                                value={formData.subjectName}
                                onChange={handleChange}
                                variant="filled"
                                focusBorderColor="blue.300"
                                placeholder="Enter Subject Name"
                                fontSize="md"
                            //   _placeholder={{ color: 'black' }} // Placeholder color
                            />
                            <FormErrorMessage>{errors.subjectName}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.topicName}>
                            <FormLabel fontSize="lg" color={"#011e3c"}>Topic Name</FormLabel>
                            <Input
                                type="text"
                                name="topicName"
                                value={formData.topicName}
                                onChange={handleChange}
                                variant="filled"
                                focusBorderColor="blue.300"
                                placeholder="Enter Topic Name"
                                fontSize="md"

                            //   _placeholder={{ color: 'gray.300' }}
                            />
                            <FormErrorMessage>{errors.topicName}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.difficulty}>
                            <FormLabel fontSize="lg" color={"#011e3c"}>Select Difficulty</FormLabel>
                            <Select
                                name="difficulty"
                                value={formData.difficulty}
                                onChange={handleChange}
                                placeholder="Select Difficulty"
                                variant="filled"
                                focusBorderColor="blue.300"
                                fontSize="md"
                            >
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </Select>
                            <FormErrorMessage>{errors.difficulty}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.numberOfQuestions}>
                            <FormLabel fontSize="lg" color={"#011e3c"}>Number of Questions</FormLabel>
                            <NumberInput
                                min={1}
                                value={formData.numberOfQuestions}
                                onChange={(valueString) =>
                                    setFormData({ ...formData, numberOfQuestions: Number(valueString) })
                                }
                                variant="filled"
                            >
                                <NumberInputField name="numberOfQuestions" placeholder="Enter Number" fontSize="sm" />
                            </NumberInput>
                            <FormErrorMessage>{errors.numberOfQuestions}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.questionType}>
                            <FormLabel fontSize="lg" color={"#011e3c"}>Choose the Type of Questions to Generate:</FormLabel>
                            <RadioGroup
                                name="questionType"
                                value={formData.questionType}
                                onChange={(value) => setFormData({ ...formData, questionType: value })}
                            >
                                <Stack spacing={3}>
                                    <Radio value="onlyQuestion" colorScheme="blue">
                                        <Text fontSize="lg" fontWeight="medium" color={"black"}>Generate Only Question</Text>
                                    </Radio>
                                    <Radio value="questionWithAnswer" colorScheme="blue">
                                        <Text fontSize="lg" fontWeight="medium" color={"black"}>Generate Question with Answer</Text>
                                    </Radio>
                                    <Radio value="questionWithAnswerAndExplanation" colorScheme="blue" >
                                        <Text fontSize="lg" fontWeight="medium" color={"black"} >Generate Question with Answer and Explanation</Text>
                                    </Radio>
                                    <Radio value="multipleChoice" colorScheme="blue">
                                        <Text fontSize="lg" fontWeight="medium" color={"black"}>Generate Question with Multiple Choice</Text>
                                    </Radio>
                                </Stack>
                            </RadioGroup>

                            <FormErrorMessage>{errors.questionType}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.document}>
                            <FormLabel >
                                <Box display={"flex"} gap={"5px"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row", '2xl': "row" }}>
                                    <Text fontSize="lg" color={"#011e3c"} fontWeight="bold">Upload a Document (Limit 200MB)</Text>
                                    <Text fontSize="sm" color={"#011e3c"} fontWeight="bold">(jpg,pdf,jpge,txt,png)</Text>
                                </Box>
                            </FormLabel>
                            <Box
                                {...getRootProps()}
                                border="2px dashed"
                                borderColor={useColorModeValue('gray.300', 'gray.600')}
                                p="4"
                                rounded="md"
                                cursor="pointer"
                                textAlign="center"
                                _hover={{ bg: useColorModeValue('gray.400', 'gray.900'), transition: 'background 0.2s' }}
                            >
                                <Input {...getInputProps()} style={{ display: 'none' }} />
                                <Icon as={FaFileUpload} boxSize={8} mb={2} />
                                {isDragActive ? (
                                    <Text fontSize="sm" color="gray.500">Drop the file here...</Text>
                                ) : (
                                    <Text fontSize="md" color="gray.800" fontWeight={"bold"}>
                                        {formData.document
                                            ? `Selected File: ${formData.document.name}`
                                            : 'import from file or url'}
                                    </Text>
                                )}
                            </Box>
                            <FormErrorMessage>{errors.document}</FormErrorMessage>
                        </FormControl>
                        <Box>
                            <ShimmerButtonDemo name={"Generate Questions"} />
                        </Box>
                    </VStack>
                </form>
            </Box>
        </Box>
    );
}

export { QuestionForm };



