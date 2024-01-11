import {
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/Hlogo.png";

const NavBar = () => {
  return (
    <HStack>
      <a href="#">
        <Image src={logo} boxSize="50px" cursor="pointer" />
      </a>
      <Text> Hunter C </Text>

      <Spacer />
      <Flex as="nav">
        <List display="flex" alignItems="center" spacing="">
          <ListItem marginRight="4">About Me</ListItem>
          <ListItem marginRight="4">Projects</ListItem>
          <ListItem marginRight="4">My Skills</ListItem>
          <ListItem marginRight="4">Contact Me</ListItem>
        </List>
      </Flex>
    </HStack>
  );
};

export default NavBar;
