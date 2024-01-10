import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Hlogo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" />
      <Text> about me </Text>
    </HStack>
  );
};

export default NavBar;
