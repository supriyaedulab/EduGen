
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CountUp from "react-countup";

const Staticstics = () => {
  return (
    <>
      <Box fontSize={["xl", "2xl", "3xl", "3xl"]}>
      <Text fontWeight="bold">
          Trusted by <CountUp start={0} end={100000} duration={2} separator="," />+ users!
        </Text>
        <Text fontWeight="bold" textAlign="center" width="80%" margin="auto">
          Join our users in saving hundreds of hours every month on quizzes.
        </Text>
      </Box>
      <Box
        display="flex"
        fontWeight="bold"
        fontSize={["xl", "2xl", "3xl", "3xl"]}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        gap="30px"
      >
        <Box>
          <Text fontWeight="bold">
           <CountUp start={0} end={1500000} duration={3} separator="," />+
          </Text>
          <Text fontWeight="bold">MCQs</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">
            <CountUp start={0} end={800000} duration={3} separator="," />+
          </Text>
          <Text fontWeight="bold">True/False Qs</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">
            <CountUp start={0} end={150000} duration={3} separator="," />+
          </Text>
          <Text fontWeight="bold">Hours Saved!</Text>
        </Box>
      </Box>
    </>
  );
};

export { Staticstics };
