import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";

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

      <GridItem area={"main"} bg="blue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
