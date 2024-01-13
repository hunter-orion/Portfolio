import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Image,
  Center,
  VStack,
  Link,
  Text,
  Box,
} from "@chakra-ui/react";
import cloudHost from "../assets/cloudHost.png";
import gameHub from "../assets/gamehub.png";

const MyPortfolio = () => {
  return (
    <>
      <Box id="projects" marginLeft={5} marginRight={5} marginTop={60}>
        <Heading textAlign="center">Projects</Heading>

        <Center>
          <VStack align="center">
            <SimpleGrid
              spacing={4}
              marginX={3}
              marginY={39}
              templateColumns={[
                "repeat(auto-fill, minmax(300px, 1fr))",
                "repeat(auto-fill, minmax(500px, 1fr))",
              ]}
            >
              <Card border="solid grey">
                <CardHeader>
                  <Heading size="lg" textAlign="center">
                    {" "}
                    Cloud Hosting
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Image src={cloudHost} />
                  <Text padding={5}>
                    This was a project which utilized vanilla html/CSS with some
                    frameworks for dynamic scrolling.
                  </Text>
                </CardBody>
                <Center>
                  <CardFooter>
                    <Link
                      href="https://643100f4098e7e00081693de--astonishing-tarsier-b414aa.netlify.app/#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button> View here</Button>
                    </Link>
                  </CardFooter>
                </Center>
              </Card>

              <Card border="solid grey">
                <CardHeader>
                  <Heading size="lg" textAlign="center">
                    {" "}
                    Game Hub
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Image src={gameHub} />
                  <Text padding={3}>
                    {" "}
                    This project used React 18, Zustand, JS, TS, Axios, and
                    Chakra-UI to create a responsive webpage that calls to rawg
                    API. There is error handling, loading skeletons, click
                    events, and multiple filters which send requests to the API
                    for data, search bar, cacheing, and utilizes pagination.
                  </Text>
                </CardBody>
                <Center>
                  <CardFooter>
                    <Link
                      href="https://game-hub-pied-delta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button> View here</Button>
                    </Link>
                  </CardFooter>
                </Center>
              </Card>
            </SimpleGrid>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default MyPortfolio;
