// import React from 'react'

// const Contacts = () => {
//   return (
//     <div></div>
//   )
// }

// export  {Contacts}

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";

function Contacts() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <Box>
      <Box bg="#5c5c5c" color="white" p={8} mb={6} mt={"80px"} width={"100%"} height={"200px"}>
        <Heading as="h1" size="xl" textAlign="center" mt={"20px"}>
          Contact Us
        </Heading>

      </Box>

      <Container maxW="container.lg">
        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          <VStack
            as="form"
            spacing={4}
            flex="1"
            p={8}
            onSubmit={handleSubmit}
          >
            <Heading as="h2" size="lg">
              Contact Us
            </Heading>
            <Text>
              Hello, please use the form below in order to get in touch with our
              team.
            </Text>

            <FormControl id="firstName" isRequired>
              <FormLabel>First Name *</FormLabel>
              <Input
                type="text"
                name="firstName"
                placeholder="Please enter your First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name *</FormLabel>
              <Input
                type="text"
                name="lastName"
                placeholder="Please enter your Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email *</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter your Email ID"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="purpose" isRequired>
              <FormLabel>Purpose To Connect *</FormLabel>
              <Textarea
                name="purpose"
                placeholder="Please enter your purpose"
                value={formData.purpose}
                onChange={handleChange}
              />
            </FormControl>
          
            <Button type="submit" colorScheme="blue" alignSelf={"flex-start"} >
              Send message
            </Button>
        

          </VStack>

          <Box flex="1" p={8} height={{ base: "auto", md: "600px" }} >
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.651300402396!2d72.86744831513932!3d19.1088416870704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84455c86c25%3A0xd2f2ae7730e8083!2sPinnacle%20Business%20Park%2C%20Mahakali%20Caves%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400593!5e0!3m2!1sen!2sin!4v1636345516807!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export { Contacts };
