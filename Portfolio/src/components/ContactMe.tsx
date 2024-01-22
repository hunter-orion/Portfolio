import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
} from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <Card
      align="center"
      paddingTop={40}
      paddingBottom={40}
      marginLeft="10vw"
      marginTop={10}
      marginRight="10vw"
      marginBottom={10}
      border="solid grey"
      style={{ background: "" }}
    >
      <CardHeader>
        {" "}
        <Heading> Contact Me</Heading>
      </CardHeader>
      <CardBody id="contact-me">
        <Button>
          <Link href={`mailto:${"huntercarlis@yahoo.com"}`}> Email me</Link>
        </Button>
      </CardBody>
    </Card>
  );
};

export default ContactMe;
