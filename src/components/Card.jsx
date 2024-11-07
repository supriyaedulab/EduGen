import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({heading, para,image}) => {
  return (
    // border={"2px solid red"}
    <Box height={"auto"} bg={"linear-gradient(to right, #c8f9db 0%, #96bcfd 100%)"} padding={"30px"} borderRadius={"10px"} mb={"30px"}>
        <Text fontWeight={'bold'} fontSize={"25px"}>{heading}</Text>
        <Text mt={"30px"}mb={"30px"} fontWeight={'medium'} fontSize={"16px"} >{para}</Text>
        <Image height={"auto"} width={"100%"}  src={`${image}`} borderRadius={"10px"} />
    </Box>
  )
}

export  {Card}