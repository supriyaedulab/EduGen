import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Text,
  VStack,
  useToast,
  Flex,
  Divider
} from "@chakra-ui/react";
import { ShimmerButtonDemo } from '../components/ShimmerButtonDemo';

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
  });

  const [isSending, setIsSending] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, purpose } = formData;
    if (!name || !email || !purpose) {
      toast({
        title: "Validation Error",
        description: "All fields are required.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending) {
      toast({
        title: "Please wait",
        description: "You can only send one email at a time.",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!validateForm()) return;

    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Shailesh Kumar",
      message: formData.purpose,
    };

    const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

    if (!VITE_SERVICE_ID || !VITE_TEMPLATE_ID || !VITE_PUBLIC_KEY) {
      toast({
        title: "Error",
        description: "Environment variables are not properly set.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setIsSending(false);
      return;
    }

    emailjs
      .send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, templateParams, VITE_PUBLIC_KEY)
      .then(
        () => {
          toast({
            title: "Email Sent",
            description: "Your email was sent successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setFormData({ name: "", email: "", purpose: "" });
        },
        (error) => {
          toast({
            title: "Error",
            description: `Failed to send email: ${error.text}`,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    // bg={"linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}
    <Box mt={"70px"}>
      <Box
        bgGradient="linear(to-r, teal.500, blue.500)"

        p={8}
        mb={6}
        pt={"80px"}
        width={"100%"}
        height={"230px"}
      >
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mt={"20px"}

          color="white"
        >
         Contact Us
        </Heading>
      </Box>

      <Flex
        direction={{ base: "column", md: "column", lg: "row" }} // column for mobile/tablet, row for laptop/desktop
        width={{ base: "99%", sm: "98%", md: "95%", lg: "95%", xl: "95%" }}
        margin={"auto"}
        padding={"20px"}
        pb={"30px"}
        gap={{ base: "20px", md: "40px" }} // Add gap between the map and form
      >
        {/* Map section */}
        <Box
          flex={1} // Make it take equal space as the form in row layout
          mb={{ base: "20px", md: "0" }} // Add margin-bottom for mobile/tablet, no margin for larger screens  
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3573.469301238488!2d72.85968120293057!3d19.118240861597513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82f7217df63%3A0xdbecb9edb563f555!2sEdulab%20educational%20Exchange%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1728296321129!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        {/* Contact Us form */}
        <VStack
          as="form"
          spacing={6}
          p={{base:"5",sm:"5",md:"8"}}
          onSubmit={sendEmail}
          width={{
            base: "100%", // full width for mobile/tablet
            sm: "100%",
            md: "100%", // half width for laptop/desktop
            lg: "50%",
            xl: "50%"
          }}
          margin={"auto"}
          borderWidth={2}
          borderColor="gray.300"
          borderRadius="xl"
          boxShadow="lg"
          // bgGradient="linear(to-br, white, gray.100)"
          // bg={"linear-gradient(to right, #c8f9db 0%, #96bcfd 100%)"}
         
        >
          <Heading as="h2" size="lg" color="#011e3c" textDecoration="underline">
            Send Us Massage
          </Heading>
          <Text color={"gray.600"} fontSize="lg">
            Please use the form below to reach out to our team.
          </Text>

          <FormControl id="name" isRequired>
            <FormLabel fontWeight="bold" color="blue.700">
              Name 
            </FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Please enter your full Name"
              value={formData.name}
              onChange={handleChange}
              borderWidth={2}
              borderColor="gray.300"
              borderRadius="lg"
              bg="white"
              _hover={{ borderColor: "teal.500" }}
              _focus={{
                borderColor: "blue.600",
                boxShadow: "0 0 0 2px blue.600",
              }}
              _placeholder={{ fontSize: { base: "sm", md: "md", lg: "lg" } }}
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel fontWeight="bold" color="blue.700">
              Email 
            </FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your Email ID"
              value={formData.email}
              onChange={handleChange}
              borderWidth={2}
              borderColor="gray.300"
              borderRadius="lg"
              bg="white"
              _hover={{ borderColor: "teal.500" }}
              _focus={{
                borderColor: "blue.600",
                boxShadow: "0 0 0 2px blue.600",
              }}
              _placeholder={{ fontSize: { base: "sm", md: "md", lg: "lg" } }}
            />
          </FormControl>

          <FormControl id="purpose" isRequired>
            <FormLabel fontWeight="bold" color="blue.700">
              Purpose To Connect 
            </FormLabel>
            <Textarea
              name="purpose"
              placeholder="Please enter your purpose"
              value={formData.purpose}
              onChange={handleChange}
              borderWidth={2}
              borderColor="gray.300"
              borderRadius="lg"
              bg="white"
              _hover={{ borderColor: "teal.500" }}
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 2px blue.600",
              }}
              _placeholder={{ fontSize: { base: "sm", md: "md", lg: "lg" }}}
            />
          </FormControl>

          <ShimmerButtonDemo name={"Send Message"} />
        </VStack>
      </Flex>

    </Box>
  );
}

export { Contacts };
