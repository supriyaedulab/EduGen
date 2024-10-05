import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Links = [
  { name: "Home", path: "/" },
  { name: "EduGen", path: "/quetiongenerator" },
  { name: "Teams", path: "/teams" },
  { name: "Contacts", path: "/contacts" },
];

const NavLink = ({ children, to, onClick }) => {
  return (
    <RouterLink to={to} onClick={onClick}>
      <Box
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          color: "white",
        }}
      >
        {children}
      </Box>
    </RouterLink>
  );
};

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={isOpen ? "blue.500" : "white"}
      px={4}
      top="0"
      zIndex="10"
      width={"100%"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack
          display={"flex"}
          width={{ sm: "90%", md: "100%", lg: "100%" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"20px"}
          >
            <img
              src="https://edulab.in/wp-content/uploads/2022/08/edulab-1.jpg"
              height={"130px"}
              width={"130px"}
            />
          </Box>

          <HStack
            as={"nav"}
            display={{ base: "none", lg: "flex" }}
            alignItems={"center"}
            width={{ sm: "30%", md: "50%", lg: "39%" }}
            justifyContent={{
              sm: "space-evenly",
              md: "space-evenly",
              lg: "space-around",
            }}
          >
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                <Text color="black" fontSize={"17px"} fontWeight={"medium"}>
                  {link.name}
                </Text>
              </NavLink>
            ))}
            <Button
              bgColor={"#3470e4"}
              _hover={{ bgColor: "#3470e4" }}
              borderRadius={"20px"}
              mt={"10px"}
              mb={"10px"}
            >
              <Text textColor={"white"} fontSize={"17px"}>
                Start for free
              </Text>
            </Button>
          </HStack>
        </HStack>

        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          display={{ lg: "none" }}
          bg={"blue.500"}
          color={"white"}
          width={"100%"}
          // height={"calc(100vh - 200px)"} // To ensure full-screen coverage
        >
          <Stack as={"nav"} spacing={4} p={4}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                <Text color="white" fontSize={"17px"} fontWeight={"medium"}>
                  {link.name}
                </Text>
              </NavLink>
            ))}
            <Button bgColor={"#2851a3"}  _hover={{ bgColor: "#2851a3" }}width={"130px"}>
              <Text textColor={"white"} fontSize={"17px"}>
                Start for free
              </Text>
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
