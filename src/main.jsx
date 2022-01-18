import { Box } from "@chakra-ui/react";
import Noise from "./component/Noise";
import ResetButton from "./component/ResetButton";
import Base from "./component/Base";
import DropZone from "./component/DropZone";
import Namso from "./component/Namso";
import Eun from "./component/Eun";
import Hyunchul from "./component/Hyunchul";

function Main() {
  return (
    <Box bg="#b89e81" position="relative">
      <Noise />
      <ResetButton />
      <Base />
      <DropZone />
      <Namso />
      <Eun />
      <Hyunchul />
    </Box>
  );
}

export default Main;
