import { Box, Image } from "@chakra-ui/react";
// import assets from "./assets/assets";
import Base from "./component/Base";
import DropZone from "./component/DropZone";
import Namso from "./component/Namso";
import Eun from "./component/Eun";
import Hyunchul from "./component/Hyunchul";

function Main() {
  return (
    <Box bg="#b89e81" border="1px" borderColor="red">
      <Box
        position="absolute"
        w="100%"
        h="100%"
        bgColor="blue"
        opacity="0.04"
        bgImage="url('https://uploads-ssl.webflow.com/61281e78cb914a06ecd1031c/61281e78cb914a9a99d1034a_noise.gif')"
      >
        asd
      </Box>
      <Base />
      <DropZone />
      <Namso />
      <Eun />
      <Hyunchul />
    </Box>
  );
}

export default Main;
