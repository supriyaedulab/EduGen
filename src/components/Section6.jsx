import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Card } from './Card'

const Section6 = () => {
  return (
    // , lg: "50%", xl: "50%"
   
<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={{ base: "90%", sm: "90%", md: "70%", lg: "50%", xl: "50%" }} margin={"auto"} mb= {{ base: "50px", sm: "50px", md: "50px", lg: "50px", xl: "50px" }}>
<Text fontWeight={"bolder"} fontSize={"3xl"} mt={"70px"} mb={"30px"}textAlign={"center"} >Questgen's Top Features</Text>
<Text fontSize={"20px"} fontWeight={"medium"} textAlign={"center"} mb={"50px"} color={"gray.500"}>Questgen offers comprehensive quiz generation solutions for both educators and learners.</Text>
<Card heading={"1. Support for various Quiz Types"} para={"Questgen supports AI question generation from text for various popular quiz types like MCQs, MCQs with multiple correct answers, True or False, Fill-in-the-blanks, FAQ, Short Answer, Higher Order Question Answers and more!"} image={"https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2egc8iWFfHNJX3qf5Qt4lwTFRTX_CleanShot_2024-04-05_at_20_32_47_2x.png"}/>
  <Card heading={"2. Study mode for students to practice for an exam"} para={"Students can generate an AI quiz from any text or document and click on the Study button to enter into learn mode and practice for a text or exam easily! You will also see a score at the end for automated evaluation quizzes like MCQs, True or False etc "} image={"https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2eghpcMmQAtCRzfVWLdJlpUPubi_CleanShot_2024-04-05_at_20_39_37_2x.png"}/> 
    <Card heading={"3. Bloom's Taxonomy Level Question Generation"} para={"You can use Questgen's Bloom's Taxonomy AI quiz maker to create questions on a specific blooms taxonomy level or on all six levels (Remember, Understand, Apply, Analyze, Evaluate, Create) of Bloom's Taxonomy."} image={"https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2egiuxzyu2kiJtg09T1kBaudl4s_CleanShot_2024-04-05_at_21_29_08_2x.png"}/>
    <Card heading={"4. Match the following Quiz using AI"} para={"You can use Questgen's AI Match-the-Following quiz generator to generate matching quiz from any text or document and export in formats specific to match the following quizzes."}image={"https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2egjeBCiYC477yMeQgaZMGm5Duc_CleanShot_2024-04-05_at_21_34_33_2x.png"}/>
    <Card heading={"5. Image to Quiz generator using AI"} para={"You can use Questgen's AI image to quiz generator to upload snapshots from textbooks, newspaper articles, etc, and generate quizzes in 1-click."} image={"https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2egk9xdpQTAtF3blcVQfpPDucVc_CleanShot_2024-04-05_at_21_40_16_2x.png"}/>
    <Card heading={"6. Text to Storybook illustration generator using AI"} para={"You can use Questgen's AI illustration generator to generate storybook Illustrations for children's stories from any text in 1-click. You can generate illustrations in several styles like watercolor, line art, comic book etc"} image={"https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2egkf77jLgYBYZiQnLRKnxq8ZmI_CleanShot_2024-04-05_at_21_43_04_2x.png"}/>
    <Card heading={"7. Similar Question generator using AI"} para={"You can use Questgen's similar question generator to generate similar questions to a given question. Perfect to expand your question bank and avoid repetitive questions in every term quiz or exam! "} image={"https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2egl6IH3brRrn9EYhsN9xp2rUGc_CleanShot_2024-04-05_at_21_46_40_2x.png"}/>
    <Card heading={"8. AI-powered Video to Quiz Generator "} para={"You can use Questgen's audio/video to AI quiz generator to upload any audio or video file and easily create quizzes like MCQs, True/False, Fill-in-the-blanks, etc.! Whether you're a teacher looking to create dynamic assessments or a student preparing for an upcoming exam, Questgen's Video to Quiz Generator is a great solution. Simply download your favorite educational YouTube videos as MP3 audio files using online services and upload them to Questgen to let our AI algorithms generate a comprehensive quiz based on the content."} image={"https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2ep8rlykA2S2z6dDNmp3917FNUr_CleanShot_2024-04-08_at_20_41_18_2x.png"}/>
    <Card heading={"9. Share and Embed Quizzes!"} para={"You can use the quizzes generated by Questgen and share them publicly or embed them on any website as an interactive iframe! Very useful feature if you want users to learn content and take an instant quiz on your website! An example of an interactive quiz that you can take is shown below!"} image={"./src/images/image9.png"}/>
    </Box>
  )
}

export  {Section6}