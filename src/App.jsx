import { Flex } from "@chakra-ui/react";
import Converter from "../features/Converter";

function App() {
  return (
    <>
      <Flex
        bgGradient="linear(to-t, #ae085c, #2e0656)"
        justifyContent="center"
        height="100vh"
      >
        <Converter />
      </Flex>
    </>
  );
}

export default App;
