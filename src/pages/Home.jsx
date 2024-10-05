import React from 'react'
import { Section6 } from '../components/Section6'
import { Hero } from "../components/Hero";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";
import { Section4 } from "../components/Section4";
import { Section5 } from "../components/Section5";

const Home = () => {
  return (
    <>
     <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    </>
  )
}

export  {Home}