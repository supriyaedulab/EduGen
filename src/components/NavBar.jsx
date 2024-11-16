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
      bg={{ base: "white", lg: "white" }}
      color={{ base: "black", lg: "black" }}
      width={"90px"}
      pl={"6px"}
      pr={"0px"}
      fontSize={"18px"}
      fontWeight={"0px"}
      _hover={{ color: { base: "black", lg: "black" } }}
      _expanded={{ bg: { base: "white", lg: "white" } }}
      transition="color 0.2s ease"
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
      <MenuItem as={RouterNavLink} to="/questionform" onClick={onClose} fontSize="sm" fontWeight={"medium"} color={"black"}>
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
      borderBottom: isActive ? "2px solid gray" : "2px solid transparent",
      transition: "border-bottom 0.4s ease-in-out",
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
            // border={"2px solid red"}
          >
            <img src="../images/edulab.png" alt="logo" />
          </Box>

          <HStack
            as={"nav"}
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            justifyContent={{
              sm: "space-evenly",
              md: "space-evenly",
              lg: "space-evenly",
            }}
            gap={"25px"}
          >
            {Links.map((link) =>
              link.dropdown ? (
                <EduGenDropdown key={link.name} />
              ) : (
                <NavLink key={link.name} to={link.path}>
                  <Text color={"black"} fontSize={"18px"} _hover={{ color: "#2A9D8F" }}
                    transition="color 0.2s ease">
                    {link.name}
                  </Text>
                </NavLink>
              )
            )}
            <ShimmerButtonDemo name={"Start for Free"} path="/questionForm" />
          </HStack>
        </HStack>

        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Box position="relative" zIndex="20">
          {/* Background blur overlay for small screens only */}
          <Box
            display={{ base: "block", md: "none" }} // Visible only on base and sm sizes
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="rgba(255, 255, 255, 0.3)" // Slightly transparent background
            backdropFilter="blur(8px)" // Apply the blur effect
            zIndex="-1" // Send it behind the overlay content
          />

          {/* Overlay content with close button */}
          <Box
            display={{ md: "none" }}
            bg="white"
            borderRadius="lg"
            color="black"
            p={4}
            maxW="400px" // Limit width
            maxH="100vh" // Limit height
            mx="auto" // Center horizontally
            mt="20px" // Margin from top
            overflowY="auto" // Scrollable if content exceeds height
            position="relative" // To position the close button inside this box
          >
            {/* Close button */}
            <IconButton
              icon={<CloseIcon />}
              aria-label="Close Menu"
              onClick={onClose}
              position="absolute"
              top="10px"
              right="10px"
              bg="transparent"
              _hover={{ bg: "gray.200" }}
            />

            {/* Navigation links */}
            <Stack as={"nav"} spacing={4} pl={"30px"} pt={"30px"}>
              {Links.map((link) =>
                link.dropdown ? (
                  <EduGenDropdown key={link.name} onClose={onClose} />
                ) : (
                  <RouterNavLink key={link.name} to={link.path} onClick={onClose}>
                    <Text color="black" fontSize={"18px"} pl={"7px"}>
                      {link.name}
                    </Text>
                  </RouterNavLink>
                )
              )}
              <Box display={"flex"} alignSelf={"flex-start"}>
                <ShimmerButtonDemo name={"Start for Free"} path="/questionForm" />
              </Box>
            </Stack>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
