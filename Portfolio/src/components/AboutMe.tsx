import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import ColorModeButton from "./ColorModeButton";

export const AboutMe = () => {
  return (
    <Center>
      <Card
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        padding={5}
        marginTop={100}
      >
        <Stack>
          <Center>
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px", md: "300px", lg: "500px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
          </Center>
          <CardBody>
            <Center>
              <Heading size="xl">About Me</Heading>
            </Center>
            <Center>
              <Text fontSize="1.2rem" py="2">
                I'm a front end developer who loves creating beautiful,
                responsive, and search engine optamized websites.
              </Text>
            </Center>
          </CardBody>

          <CardFooter>
            <ColorModeButton />
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
};

export default AboutMe;
