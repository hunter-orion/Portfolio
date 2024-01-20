import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { AboutMe } from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio";
import Skills from "./components/Skills";

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
      </GridItem>
    </Grid>
  );
}

export default App;
