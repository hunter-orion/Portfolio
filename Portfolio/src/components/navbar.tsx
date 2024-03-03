import {
  Button,
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
    <HStack
      position="fixed"
      width="100%"
      bg="gray.800"
      color="white"
      paddingY={2}
      zIndex={10}
    >
      <a href="#">
        <Image src={logo} boxSize="50px" cursor="pointer" />
      </a>
      <Text> Hunter C </Text>

      <Spacer />
      <Flex as="nav">
        <List display="flex" alignItems="center" spacing="">
          <ListItem marginRight="4">
            <Button>
              <a href="/#projects" className="nav-link">
                Projects
              </a>
            </Button>
          </ListItem>
          <ListItem marginRight="4">
            <Button>
              <a href="/#skills" className="nav-link">
                My Skills
              </a>
            </Button>
          </ListItem>
          <ListItem marginRight="4">
            {" "}
            <Button>
              <a href="/#contact-me" className="nav-link">
                Contact Me
              </a>
            </Button>
          </ListItem>
        </List>
      </Flex>
    </HStack>
  );
};

export default NavBar;
