import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import fiverrLogo from "../assets/fiverLogo.avif";

const ContactMe = () => {
  return (
    <Card
      align="center"
      paddingTop={30}
      paddingBottom={30}
      marginLeft="20vw"
      marginTop={40}
      marginRight="20vw"
      marginBottom={10}
      border="solid grey"
      style={{ background: "" }}
    >
      <CardHeader>
        {" "}
        <Heading> Contact Me</Heading>
      </CardHeader>
      <CardBody id="contact-me" style={{ textAlign: "center" }}>
        <Button boxSize={20} margin={3}>
          <Link href={`mailto:${"huntercarlis@yahoo.com"}`}>
            <FaEnvelope size={50} style={{ display: "inline" }} />
          </Link>
        </Button>
        <Button margin={3} boxSize={20}>
          <Link
            href="https://fiverr.com/hunter_orion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={fiverrLogo}
              boxSize="50px"
              style={{ display: "inline" }}
            />
          </Link>
        </Button>
        <Button margin={3} boxSize={20}>
          <Link
            href="https://www.linkedin.com/in/hunter559/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={50} style={{ display: "inline" }} />
          </Link>
        </Button>
      </CardBody>
      <Text color={"grey"}> @Built by me</Text>
    </Card>
  );
};

export default ContactMe;
