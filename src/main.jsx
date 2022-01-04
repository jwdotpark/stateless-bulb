import { Box } from "@chakra-ui/react";
import assets from "./assets/assets";
import Base from "./component/Base";
import DropZone from "./component/DropZone";

function Main() {
  return (
    <Box bg="#b59c80" border="1px" borderColor="red" w="100%" h="500vh">
      <Base />
      <DropZone />
    </Box>
  );
}

export default Main;
