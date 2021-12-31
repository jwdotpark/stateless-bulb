import "./styles.css";
import { Box, Image, Text } from "@chakra-ui/react";
import DraggableComponent from "./components/DraggableComponent";

function Main() {
  return (
    <>
      <Box borderColor="red">
        <DraggableComponent />
      </Box>
    </>
  );
}

export default Main;
