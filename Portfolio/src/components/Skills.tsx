import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaJs,
  FaCode,
  FaHtml5,
  FaCss3,
  FaGit,
  FaGithub,
  FaDocker,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import "../CSS/Skills.css";
import AOS from "aos";
import { FaT } from "react-icons/fa6";

AOS.init();

const Skills = () => {
  return (
    <Card id="skills" align="center" paddingTop={10}>
      <CardHeader paddingBottom={20}>
        <Heading size="xl">
          <FaCode size={40} style={{ display: "inline", marginRight: "5px" }} />{" "}
          My Skills
        </Heading>
      </CardHeader>
      <CardBody border="solid grey" data-aos="flip-up">
        <SimpleGrid
          spacing={4}
          marginX={3}
          marginY={39}
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          width="90vw"
        >
          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaJs size={50} style={{ display: "inline", marginRight: "5px" }} />{" "}
            JavaScript
          </Text>

          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaT size={50} style={{ display: "inline", marginRight: "5px" }} />{" "}
            TypeScript
          </Text>
          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaHtml5
              size={50}
              style={{ display: "inline", marginRight: "5px" }}
            />{" "}
            Html
          </Text>
          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaCss3
              size={50}
              style={{ display: "inline", marginRight: "5px" }}
            />
            CSS{" "}
          </Text>
          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaDocker
              size={50}
              style={{ display: "inline", marginRight: "5px" }}
            />{" "}
            Docker
          </Text>
          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaGit
              size={50}
              style={{ display: "inline", marginRight: "5px" }}
            />{" "}
            Git
          </Text>
          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaGithub
              size={50}
              style={{ display: "inline", marginRight: "5px" }}
            />{" "}
            GitHub
          </Text>
          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaNodeJs
              size={50}
              style={{ display: "inline", marginRight: "5px" }}
            />{" "}
            NodeJS
          </Text>
          <Text className="Text" paddingBottom={10} fontSize="2rem">
            <FaDatabase
              size={50}
              style={{ display: "inline", marginRight: "5px" }}
            />{" "}
            MongoDB
          </Text>
        </SimpleGrid>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default Skills;
