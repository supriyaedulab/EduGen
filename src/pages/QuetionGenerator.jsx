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
  useColorModeValue,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';

function QuestionGeneratorForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast({
        title: 'quetion created successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      console.log(formData);
      // Handle form submission logic here
    }
  };

  return (
    <Box
     width={"55%"}
     margin={"auto"}
     mt={"20px"}
     mb={"50px"}
    >
      <Text fontSize="3xl" fontWeight="bold" width={"90%"} textAlign="center"  margin={"auto"} mb="4">
        AI-Powered Question Generator
      </Text>
      <form onSubmit={handleSubmit}>
    <VStack spacing={4}>
          <FormControl isInvalid={errors.subjectName}>
            <FormLabel>Subject Name</FormLabel>
            <Input
              type="text"
              name="subjectName"
              value={formData.subjectName}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.subjectName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.topicName}>
            <FormLabel>Topic Name</FormLabel>
            <Input
              type="text"
              name="topicName"
              value={formData.topicName}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.topicName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.difficulty}>
            <FormLabel>Select Difficulty</FormLabel>
            <Select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              placeholder="Select Difficulty"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </Select>
            <FormErrorMessage>{errors.difficulty}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.numberOfQuestions}>
            <FormLabel>Number of Questions</FormLabel>
            <NumberInput
              min={1}
              value={formData.numberOfQuestions}
              onChange={(valueString) =>
                setFormData({ ...formData, numberOfQuestions: Number(valueString) })
              }
            >
              <NumberInputField name="numberOfQuestions" />
            </NumberInput>
            <FormErrorMessage>{errors.numberOfQuestions}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.questionType}>
            <FormLabel>Choose the Type of Questions to Generate:</FormLabel>
            <RadioGroup
              name="questionType"
              value={formData.questionType}
              onChange={(value) =>
                setFormData({ ...formData, questionType: value })
              }
            >
              <Stack spacing={3}>
                <Radio value="onlyQuestion">Generate Only Question</Radio>
                <Radio value="questionWithAnswer">Generate Question with Answer</Radio>
                <Radio value="questionWithAnswerAndExplanation">
                  Generate Question with Answer and Explanation
                </Radio>
                <Radio value="multipleChoice">Generate Question with Multiple Choice</Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>{errors.questionType}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.document}>
            <FormLabel>Upload a Document (Optional, Limit 200MB)</FormLabel>
            <Box
              {...getRootProps()}
              border="2px dashed"
              borderColor={useColorModeValue('gray.300', 'gray.600')}
              p="4"
              rounded="md"
              cursor="pointer"
              textAlign="center"
              _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
            >
              <Input {...getInputProps()} />
              {isDragActive ? (
                <Text>Drop the file here...</Text>
              ) : (
                <Text>
                  {formData.document
                    ? `Selected File: ${formData.document.name}`
                    : 'Drag & drop a file here, or click to select a file'}
                </Text>
              )}
            </Box>
            <FormErrorMessage>{errors.document}</FormErrorMessage>
          </FormControl>

          <Button colorScheme="blue" type="submit">
            Generate Questions
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export  {QuestionGeneratorForm};
