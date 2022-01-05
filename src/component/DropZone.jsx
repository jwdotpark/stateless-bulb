import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Center, Text } from "@chakra-ui/react";

function DropZone() {
  const { globalMessage } = useContext(MessageContext);

  return (
    <>
      <Center>
        <Box width="80%" align="center">
          <Text color="#fff" fontSize="6xl" align="justify">
            {globalMessage}
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
