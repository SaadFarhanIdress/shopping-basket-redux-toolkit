import { Box, Container } from "@material-ui/core";
import Basket from "./components/basket/basket";
import Product from "./components/product/product";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5} mb={5}>
        <Product />
      </Box>
      <Box mt={5} mb={5}>
        <Basket />
      </Box>
    </Container>
  );
}

export default App;
