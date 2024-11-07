
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink as RouterNavLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ShimmerButtonDemo } from "./ShimmerButtonDemo";

const Links = [
  { name: "Home", path: "/" },
  { name: "EduGen", path: "/quetiongenerator", dropdown: true },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contacts" },
];

const EduGenDropdown = ({ onClose }) => (
  <Menu>
    <MenuButton
  as={Button}
  rightIcon={<ChevronDownIcon />}
  bg={{ base: "white", lg: "white" }} // blue on mobile/tablet, white on desktop
  color={{ base: "gray", lg: "black" }} // white text on mobile/tablet, black on desktop
  width={"90px"}
  pl={"6px"}
  pr={"0px"}
  fontWeight={"0px"}
  _hover={{ color: { base: "gray", lg: "black" } }}
  _expanded={{ bg: { base: "white", lg: "white" } }} // keeps bg blue when expanded
>
  EduGen
</MenuButton>
    <MenuList
      sx={{
        width: ["280px", "400px", "450px"],
        padding: "2px",
        fontSize: ["xs", "sm", "md"],
      }}
      
    >
      <MenuItem as={RouterNavLink} to="/AssessmentTool" onClick={onClose} fontSize="sm" fontWeight={"medium"} color={"black"}>
        AI Assessment Tools for Educators
      </MenuItem>
      <MenuItem as={RouterNavLink} to="/ContentTool" onClick={onClose} fontSize="sm" fontWeight={"medium"} color={"black"}>
        AI Content Paraphrasing Tool
      </MenuItem>
      <MenuItem as={RouterNavLink} to="/MultilingualContentTool" onClick={onClose} fontSize="sm" fontWeight={"medium"} color={"black"}>
        Multilingual Content with Edugen's AI Language Translation Tool
      </MenuItem>
      <MenuItem as={RouterNavLink} to="/questionForm" onClick={onClose} fontSize="sm" fontWeight={"medium"} color={"black"}>
        QuestForm
      </MenuItem>
    </MenuList>
  </Menu>
);

const NavLink = ({ children, to, onClick }) => (
  <RouterNavLink
    to={to}
    onClick={onClick}
    style={({ isActive }) => ({
      position: "relative",
      // paddingBottom: "4px",
      borderBottom: isActive ? "2px solid gray" : "2px solid transparent",
      transition: "border-bottom 0.4s ease-in-out", // Smooth transition for the underline
    })}
  >
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        color: "white",
        textDecoration: "underline",
      }}
    >
      {children}
    </Box>
  </RouterNavLink>
);


export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={"white"}
      px={4}
      top="0"
      
      zIndex="10"
      width={"100%"}
      height={"70px"}
      position={"fixed"}
      top={"0px"}
      borderBottom="2px solid #e2e8f0"
     
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack
          display={"flex"}
          width={{ sm: "90%", md: "100%", lg: "100%" }}
          justifyContent={{
            base: "space-between",
            sm: "space-between",
            md: "space-between",
            lg: "space-around",
            xl: "space-around",
            "2xl": "space-around",
          }}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"50px"}
            width={"130px"}
            bg={"white"}
            borderRadius={"5px"}
          >
            <img src="../images/edulab.png" alt="logo" />
          </Box>

          <HStack
            as={"nav"}
            display={{ base: "none", lg: "flex" }}
            alignItems={"center"}
            justifyContent={{
              sm: "space-evenly",
              md: "space-evenly",
              lg: "space-around",
            }}
          >
            {Links.map((link) =>
              link.dropdown ? (
                <EduGenDropdown key={link.name} />
              ) : (
                <NavLink key={link.name} to={link.path}>
                  <Text color={"black"} fontSize={"17px"}>
                    {link.name}
                  </Text>
                </NavLink>
              )
            )}
            <ShimmerButtonDemo name={"Start for Free"} />
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
        <Box  display={{ lg: "none" }} bg={"white"} color={"gray.500"} width={"100%"}>
          <Stack as={"nav"} spacing={4} p={4}>
            {Links.map((link) =>
              link.dropdown ? (
                <EduGenDropdown key={link.name} onClose={onClose} />
              ) : (
                <RouterNavLink key={link.name} to={link.path} onClick={onClose} >
                  <Text color="gray" fontSize={"17px"} pl={"10px"}>
                    {link.name}
                  </Text>
                </RouterNavLink>
              )
            )}
            <Box display={"flex"} alignSelf={"flex-start"}>
              <ShimmerButtonDemo name={"Start for Free"} />
            </Box>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
