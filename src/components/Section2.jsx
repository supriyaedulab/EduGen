import { Box, Link, Text ,Image} from '@chakra-ui/react'
import React from 'react'

const Section2 = () => {
  return (
    <Box textAlign={"center"} display={"flex"} flexDirection={"column"} justifyContent={'space-around'} height={"auto"} gap={"40px"} mt={"40px"}>
      <Box>
        <Text fontWeight={'normal'} fontSize={"xl"}>Trusted by 100,000+ users!</Text>
        <Text fontWeight={'normal'} fontSize={"xl"} textAlign={"center"} width={"80%"} margin={"auto"}>Join our users in saving hundreds of hours every month on quizzes.</Text>
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", sm: "column", md: "column", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"center"} alignItems={"center"} gap={"30px"} fontSize={"xl"}>
        {/*flexDirection= {{base:"column", sm: "column", md: "column",lg:"column",xl:"row",'2xl':"row"}} */}
        <Box>
          <Text color={"#1d45c0"} fontWeight={"medium"}>1.5 Million+</Text>
          <Text fontWeight={"medium"} fontSize={"16px"}>MCQs</Text>
        </Box>

        <Box>
          <Text color={"#1d45c0"} fontWeight={"medium"}>800,000+</Text>
          <Text fontWeight={"medium"} fontSize={"16px"}>True/False Qs</Text>
        </Box>
        <Box>
          <Text color={"#1d45c0"} fontWeight={"medium"}>150,000+</Text>
          <Text fontWeight={"medium"} fontSize={"16px"}>Hours Saved!</Text>
        </Box>
      </Box>
      <Text fontWeight={"bolder"} fontSize={"4xl"}>Questgen - The Ultimate AI Question Generator</Text>
      {/* <Box height={"auto"} width={"50%"} margin={"auto"}     border={"1px solid black"} > */}
      <Text height={"auto"} width={{ base: "80%", sm: "80%", md: "80%", lg: "70%", xl: "47%", '2xl': "47%" }} margin={"auto"} color={"gray.600"} fontSize={"17px"} fontWeight={"normal"}  >Questgen is an AI quiz generator to generate various kinds of assessments like Multiple Choice Questions (MCQs), MCQs with multiple correct answers, True/False Questions, Fill-in-the-blanks, Higher-Order Questions, Match-the-following Questions and Bloom's taxonomy quizzes, etc. in one click.</Text>


      <Text height={"auto"} width={{ base: "80%", sm: "80%", md: "80%", lg: "70%", xl: "47%", '2xl': "47%" }} margin={"auto"} color={"gray.600"} fontSize={"17px"} fontWeight={"normal"}    > You can edit and make modifications to the generated worksheet before exporting it in many of the available formats like PDF, QTI, Moodle XML, CSV, text, etc.</Text>

      <Box width={{ base: "90%", sm: "90%",md: "70%", lg: "60%", xl: "60%"  }} margin={"auto"}>
        {/* width={{base:"90%", sm: "90%", md: "70%"}} */}
        <img style={{ width: "100%" }} src='https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2egHG1qaH8YCSYB9vsPkngQ1aRr_CleanShot_2024-04-05_at_17_38_05_2x.png' />
      </Box>
      <Text fontWeight={"bolder"} fontSize={"4xl"}>How it Works</Text>
      <Box width={{ base: "90%", sm: "90%",md: "70%", lg: "60%", xl: "60%"  }}margin={"auto"} display={"flex"} flexDirection={{ base: "column", sm: "column", md: "column", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
        <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "50%", xl: "50%" }}>
          {/* {{base:"90%", sm: "90%", md: "90%",lg:"50%",xl:"50%"}} */}
          <img src="https://image.typedream.com/cdn-cgi/image/width=640,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/fd5bd935-5552-4c45-b2a3-f82e6fb20e83/2YZl5Ltrf1nOpNk9cZtyCIbOhTu_CleanShot_2023-11-23_at_17_29_03.png" alt="" />
        </Box>
        <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "50%", xl: "50%" }} margin={"auto"}  >
          <Box width={"90%"} margin={"auto"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
            <Text textAlign={"justify"} fontWeight={'bold'} fontSize={"22px"}>01. Enter text in any language or input via URL or document!</Text>
            <Text textAlign={"justify"} fontWeight={'medium'} fontSize={"16px"} color={"gray.600"}>Enter any text (up to 80,000 words) in any language, choose the type of quiz questions to be generated (MCQ, True/False, Fill-in-the-blank, FAQ, Short Answers, Higher Order QA), and click on Submit.</Text>
            <Link fontWeight={'bold'} fontSize={"16px"}>Start for free </Link>
          </Box>
        </Box>
      </Box>

      <Box width={{ base: "90%", sm: "90%",md: "70%", lg: "60%", xl: "60%"  }} margin={"auto"} display={"flex"} flexDirection={{ base: "column", sm: "column", md: "column", lg: "row", xl: "row", '2xl': "row" }} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
        <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "50%", xl: "50%" }}>

          <img src="./src/images/2Ue0SevlayxvVzt14Oaf1PfcXxe_Questgen_GIF_1.gif" alt="" />
        </Box>
        <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "50%", xl: "50%" }} margin={"auto"}  >
          <Box width={"90%"} margin={"auto"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
            <Text textAlign={"justify"} fontWeight={'bold'} fontSize={"22px"}>02 Edit and export quiz</Text>
            <Text textAlign={"justify"} fontWeight={'medium'} fontSize={"16px"} color={"gray.600"}>You can edit the quiz questions and export them into multiple formats like text (AIKEN, RESPONDUS), PDF, CSV, QTI 2.1, Moodle XML, GIFT, JSON, etc.</Text>
            <Link fontWeight={'bold'} fontSize={"16px"}>Start for free </Link>
          </Box>
        </Box>
      </Box>
      <Text fontWeight={"bolder"} fontSize={"4xl"} >Who is it for?</Text>
    </Box>
  )
}

export { Section2 }