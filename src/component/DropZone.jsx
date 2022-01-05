import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Center, Text } from "@chakra-ui/react";

function DropZone() {
  const { namsoMessage, eunMessage, hyunMessage } = useContext(MessageContext);

  return (
    <>
      <Center>
        <Box width="1100px" align="center">
          <Text color="#fff" fontSize="6xl" align="justify">
            {namsoMessage}
            {eunMessage}
            {hyunMessage}
          </Text>
        </Box>
      </Center>
      <Center>
        <Box
          border="1px"
          borderColor="#AC957B"
          borderStyle="dotted"
          w="1100px"
          h="800px"
        ></Box>
      </Center>
    </>
  );
}

export default DropZone;
