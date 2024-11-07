import { Box, Heading, ListItem, UnorderedList ,Image, Text} from '@chakra-ui/react';
// import { Image, Text } from 'lucide-react';
import React from 'react';

const AssessmentCard = ({ data ,boxShadow,backgroundColor }) => {
    console.log(data);
    return (
        <>
        {/* gap={{ base: "20px", sm: "20px", md: "20px" ,lg:"30px",xl:"30px"}} */}
            <Box textAlign={"justify"} boxShadow ={boxShadow } backgroundColor={backgroundColor} padding={"30px"} display={"flex"}  flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }} justifyContent={"space-evenly"} alignItems={"center"} gap={"30px"} >
                <Box display={"flex"} flexDirection={"column"} fontWeight={"normal"} justifyContent={"space-evenly"} width={{ base: "95%", sm: "95%", md: "60%" ,lg:"60%",xl:"60%"}}>

                
                    <Heading as="h1" size="xl" color={"#434343"} textAlign={"left"} pb={"2"}>
                        {data?.title}
                    </Heading>
                    <Text color="gray.500" fontSize="lg" pt={"2"} pb={"2"}>{data.para}</Text>
                    <Text color="#939393" fontSize="lg">Benefits:</Text>
                    <Box color="gray.500">
                        <UnorderedList spacing={3} pl={5} fontSize="lg">
                            {data.benifits.map((benefit, index) => (
                                <ListItem key={index}>
                                    {benefit}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                </Box>
                <Box width={{ base: "95%", sm: "95%", md: "35%" ,lg:"35%",xl:"35%"}} >
                    <Image
                        src={data.pic} // Replace with your image source
                        alt="AI Content Tools"
                        mt={{ base: 6, md: 0 }}
                        borderRadius={"10px"}
                        height={"100%"}
                        width={"100%"}
                    />
                </Box>
            </Box>
        </>
    );
}

export { AssessmentCard };