import { Box, Image, Text, IconButton, Flex, useBreakpointValue, Heading } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin } from 'react-icons/fa';

const TeamSection = () => {
    const cardSize = useBreakpointValue({ base: '250px', md: '260px' });

    const teamMembers = [
        {
            name: 'Pratik Gandhi',
            role: 'Chief executive officer',
            imgUrl: 'https://edulab.in/wp-content/uploads/2018/10/sir_pratik.jpg',
        },
        {
            name: 'Francis Pinto',
            role: 'Chief Technology Officer ',
            imgUrl: 'https://edulab.in/wp-content/uploads/2018/10/francis-Sir-300x300.jpg',
        },
        {
            name: 'Kumar Pal',
            role: 'Chief Operation Officer',
            imgUrl: 'https://edulab.in/wp-content/uploads/2022/08/1516638761860.jpg',
        },
    ];


    //       linkedinUrl: "https://www.linkedin.com/in/pratik-gandhi-6979838/",
    //       linkedinUrl: "https://www.linkedin.com/in/francis-pinto/"



    return (
        <Box  bg="#0c5db9" >

            <Heading
                as="h2"
                size="2xl"
                mb={"70px"}
                pt={"30px"}
                color={"white"}
                textAlign={"center"}
                textDecoration={"underline"}
            >
                Our Leadership
            </Heading>

            <Flex
                width={"100%"}
                justify="center"
                align="center"
                wrap="wrap"
                // border={"2px solid red"}
               
                //   minHeight="100vh"
                p={{ base: "5", sm: "5", md: "10", lg: "5", xl: "5" }}
            >

                {teamMembers.map((member, index) => (
                    <Box
                        key={index}
                        position="relative"
                        width={cardSize}
                        height={cardSize}
                        bg="white"
                        p={5}
                        // border={"2px solid red"}
                        borderRadius="50%"
                        boxShadow="0 0 22px rgba(0, 0, 0, 0.1)"
                        transition="all 0.6s"
                        m={5}
                        _hover={{
                            borderRadius: '10px',
                            height: '300px',
                            width: "250px",
                            padding: "5px",
                            '.img': {
                                transform: 'translateY(-5px)',
                                height: '150px',
                                width: "150px",
                                margin: "10px 40px 80px 40px",
                                objectFit: "cover"

                            },
                            '.caption': {
                                opacity: 1,
                            },
                        }}
                    >
                        <Box className="img" position="relative" width="100%" height="100%" transition="all 0.6s">
                            <Image
                                src={member.imgUrl}
                                alt={member.name}
                                borderRadius="50%"
                                boxShadow="0 0 22px rgba(0, 0, 0, 0.1)"
                                transition="all 0.6s"
                                //   w="100%"
                                width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
                                margin={"auto"}
                                //   h="100%"
                                height={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
                            />
                        </Box>
                        <Box
                            className="caption"
                            position="absolute"
                            bottom="30px"
                            top={"170px"}
                            left="50%"
                            transform="translateX(-50%)"
                            textAlign="center"
                            opacity={0}
                            transition="all 0.6s"
                        >
                            <Text fontSize="21px" fontFamily="sans-serif" color="black">
                                {member.name}
                            </Text>
                            <Text fontSize="15px" color="#0c52a1" fontFamily="sans-serif" my={2}>
                                {member.role}
                            </Text>
                            <Flex justify="center" >
                                <IconButton
                                    as="a"
                                    href="#"
                                    aria-label="Facebook"
                                    icon={<FaFacebook />}
                                    fontSize="21px"
                                    color="#333"
                                    _hover={{ color: '#0c52a1' }}
                                    m={2}
                                />
                                <IconButton
                                    as="a"
                                    href="#"
                                    aria-label="Linkedin"
                                    icon={<FaLinkedin />}
                                    fontSize="21px"
                                    color="#333"
                                    _hover={{ color: '#0c52a1' }}
                                    m={2}
                                />
                                <IconButton
                                    as="a"
                                    href="#"
                                    aria-label="Twitter"
                                    icon={<FaTwitter />}
                                    fontSize="21px"
                                    color="#333"
                                    _hover={{ color: '#0c52a1' }}
                                    m={2}
                                />
                            </Flex>
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export { TeamSection };
