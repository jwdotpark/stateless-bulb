import { Box } from "@chakra-ui/react";
// import assets from "./assets/assets";
import Base from "./component/Base";
import DropZone from "./component/DropZone";
import Namso from "./component/Namso";
import Eun from "./component/Eun";
import Hyunchul from "./component/Hyunchul";

function Main() {
  return (
    <Box bg="#b59c80" border="1px" borderColor="red" w="100%" h="500vh">
      <Base />
      <DropZone />
      <Namso />
      <Eun />
      <Hyunchul />
    </Box>
  );
}

export default Main;
