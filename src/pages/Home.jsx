import React from 'react'

import { Hero } from "../components/Hero";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";

import { Box } from '@chakra-ui/react';
import { BenefitsSection } from '../components/BenefitsSection';
import { UseCasesSection } from '../components/UseCasesSection';

const Home = () => {
  return (
    <>
     <Hero />
     <Box >
     <Section2/>
      <Section3/>
      <BenefitsSection/>
      <UseCasesSection/>
      {/* <Section4/> */}
      {/* <Section5/> */}
      {/* <Section6/> */}
     </Box>
    
  
    </>
  )
}

export  {Home}