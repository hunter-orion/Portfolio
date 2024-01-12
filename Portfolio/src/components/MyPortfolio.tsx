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
} from "@chakra-ui/react";
import cloudHost from "../assets/cloudHost.png";
import gameHub from "../assets/gamehub.png";

const MyPortfolio = () => {
  return (
    <>
      <Card marginLeft={5} marginRight={5}>
        <CardBody>
          <CardHeader>
            <Heading textAlign="center">Projects</Heading>
          </CardHeader>
        </CardBody>
      </Card>
      <Center>
        <VStack align="center">
          <SimpleGrid
            spacing={4}
            marginX={3}
            marginY={5}
            templateColumns={[
              "repeat(auto-fill, minmax(300px, 1fr))",
              "repeat(auto-fill, minmax(500px, 1fr))",
            ]}
          >
            <Card>
              <CardHeader>
                <Heading size="lg" textAlign="center">
                  {" "}
                  Cloud Hosting
                </Heading>
              </CardHeader>
              <CardBody>
                <Image src={cloudHost} />
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

            <Card>
              <CardHeader>
                <Heading size="lg" textAlign="center">
                  {" "}
                  Game Hub
                </Heading>
              </CardHeader>
              <CardBody>
                <Image src={gameHub} />
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
    </>
  );
};

export default MyPortfolio;
