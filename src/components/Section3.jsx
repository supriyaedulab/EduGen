import { Box } from "@chakra-ui/react";
import React from "react";
import {InfoCard} from "./InfoCard"; // Adjust the path as needed

const Section3 = () => {
  return (
    <Box bg="#f0f3fa" pt="30px" pb="30px" width="100%">
      <Box
        width="95%"
        margin="auto"
        textAlign="justify"
        height="auto"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap="15px"
        color="white"
      >
        <InfoCard
          imageSrc="../images/427004e4-fb4e-4981-a632-ab0bc23e88ad_undraw_teaching_f1cm_png92a7.jpg"
          title="Teachers and Schools"
          description="Teachers and Schools can use the Questgen authoring tool to create worksheets easily in a few seconds. They can avoid repetitive questions chosen from a fixed question bank every year."
        />
        <InfoCard
          imageSrc="../images/c1582509-90a4-473a-8b94-9c8bc79384f7_undraw_team_ih79_png92a7.png"
          title="HR Teams"
          description="HR teams can use Questgen to create assessments from compliance documents. Every time there is a change in policies, assessments could be generated and given to employees to make sure that they have read and understood the new policies."
        />
        <InfoCard
          imageSrc="../images/67039692-b18b-48c5-b4fc-09dde9ae7672_undraw_Notebook_re_id0r_png92a7.png"
          title="Publishers and Edtech Companies"
          description="Textbook publishers and edtech companies can use Questgen instead of outsourcing the assessment creation process. They can have a small in-house team and save hugely on time and cost."
        />
      </Box>
    </Box>
  );
};

export { Section3 };
