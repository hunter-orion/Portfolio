import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Text,
  Image,
} from "@chakra-ui/react";
import {
  FaJs,
  FaCode,
  FaHtml5,
  FaCss3,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import TsIcon from "../assets/TsIcon.png";
import "../CSS/Skills.css";

const Skills = () => {
  return (
    <Card id="skills" align="center" paddingTop={40}>
      <CardHeader>
        <Heading size="xl">
          <FaCode size={40} style={{ display: "inline", marginRight: "5px" }} />{" "}
          My Skills
        </Heading>
      </CardHeader>
      <CardBody border="solid grey">
        <Text className="Text">
          <FaJs size={30} style={{ display: "inline", marginRight: "5px" }} />{" "}
          JavaScript
        </Text>
        <Text className="Text">
          <Image
            src={TsIcon}
            boxSize="30px"
            style={{ display: "inline", marginRight: "5px" }}
          />
          TypeScript
        </Text>
        <Text className="Text">
          <FaHtml5
            size={30}
            style={{ display: "inline", marginRight: "5px" }}
          />{" "}
          Html
        </Text>
        <Text className="Text">
          <FaCss3 size={30} style={{ display: "inline", marginRight: "5px" }} />
          CSS{" "}
        </Text>
        <Text className="Text">
          <FaDocker
            size={30}
            style={{ display: "inline", marginRight: "5px" }}
          />{" "}
          Docker
        </Text>
        <Text className="Text">
          <FaGit size={30} style={{ display: "inline", marginRight: "5px" }} />{" "}
          Git
        </Text>
        <Text className="Text">
          <FaGithub
            size={30}
            style={{ display: "inline", marginRight: "5px" }}
          />{" "}
          GitHub
        </Text>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Skills;
