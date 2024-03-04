import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import { AboutMe } from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"nav" "main"`,
      }}
    >
      <Show above="lg">
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <AboutMe />
        <MyPortfolio />
        <Skills />
        <ContactMe />
      </GridItem>
    </Grid>
  );
}

export default App;
