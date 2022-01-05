import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { Box, Center, Text } from "@chakra-ui/react";

function DropZone() {
  const { globalMessage } = useContext(MessageContext);

  return (
    <>
      <Center>
        <Box
          border="1px"
          borderColor="#AC957B"
          borderStyle="dotted"
          w="1100px"
          h="600px"
        ></Box>
      </Center>
      <Center>
        <Box width="80%" align="center">
          <Text color="#fff" fontSize="xl">
            {globalMessage}
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default DropZone;
